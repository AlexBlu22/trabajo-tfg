<?php

//configuracion de la base
$hostname = "localhost";
$usuariodb = "root";
$passworddb = "";
$dbname = "proyecto";
        
//conexion con server
$conn = mysqli_connect($hostname, $usuariodb, $passworddb, $dbname);
if (!$conn)
{
    die("No hay conexión: ".mysqli_connect_error());
}

$User=$_POST['User'];
$Password=$_POST['Password'];
 
$Sentencia="INSERT INTO `usuarios` (`User`, `Password`) VALUES ('$User', '$Password')";
$resul = mysqli_query($conn , $Sentencia)or trigger_error("Query Failed SQL - Error: ".mysql_error($conectar), E_USER_ERROR);

$Sentencia="SELECT * FROM usuarios WHERE User = '".$User."' and Password = '".$Password."'";
$ResultQuery = mysqli_query($conn, $Sentencia)or trigger_error("Query Failed SQL - Error: ".mysql_error($conectar), E_USER_ERROR);
$nr = mysqli_num_rows($ResultQuery);
if($nr == 1)
{
    header("Location: sign-in.html");
    //echo "Bienvenido: " .$User;
}
else if ($nr == 0)
{
    header("Location: sign-up.html");
}
    

?>