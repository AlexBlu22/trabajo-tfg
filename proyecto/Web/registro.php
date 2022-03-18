<?php

include_once('db.php');
include_once('alerta_modal.php');

//Recibo de los datos del login
$User=$_POST['User'];
$Password=$_POST['Password'];


//echo "Los datos del usuario son los siguientes : ";
//echo "$User, $Password";

    $conectar=conn();//ejecutamos las conexiones
    $sql="SELECT count(*) FROM `usuarios` WHERE User='$User' AND Password='$Password'";
    //echo "<br>";
    //echo "Sentencia SQL: ";
    //echo "$sql";

    $resul = mysqli_query($conectar , $sql)or trigger_error("Query Failed SQL - Error: ".mysql_error($conectar), E_USER_ERROR);
    
    $arrayDatos = mysqli_fetch_array($resul);
    //echo "<br>";
    //echo "<br>";
    //echo ("Resulado: $arrayDatos[0]");


    if ($arrayDatos[0] == "0") {
         //echo "Usuario KO";
         MensajeAlerta("error", "Dato erroneo!!", "sign-in.html");
    } else {
         //echo "Usuario OK";
         MensajeAlerta("correcto", "Bienvenido!!", "comentarios.html");
    }

?>