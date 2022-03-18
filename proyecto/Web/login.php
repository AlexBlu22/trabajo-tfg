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
          
$ResultQuery = mysqli_query($conn, "SELECT * FROM usuarios WHERE User = '".$User."' and Password = '".$Password."'");
$nr = mysqli_num_rows($ResultQuery);

if($nr == 1)
{
    header("Location: comentarios.html");
    //echo "Bienvenido: " .$User;
}
else if ($nr == 0)
{
    header("Location: sign-inko.html");
}

?>