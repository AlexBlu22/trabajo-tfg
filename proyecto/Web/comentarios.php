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

$Site_Code=$_POST['Site_Code'];
$Data_to_Search=$_POST['Data_to_Search'];
$Query = "";
    if ($Data_to_Search == "") {
        $Query = "SELECT * FROM usuarios WHERE User like '%".$Site_Code."%'";
    }
    else {
        if (strpos("USER,PASSWORD,NAME,APELLIDOS",strtoupper($Data_to_Search)) >= 1) {
            $Query = "SELECT $Data_to_Search FROM usuarios WHERE User like '%".$Site_Code."%'";
        }
        else {
            echo "El nombre que a indicado no existe";
        }
    }

if ($Query != ""){
    $ResultQuery = mysqli_query($conn, $Query);
    $nr = mysqli_num_rows($ResultQuery);

    if($nr >= 1)
    {
        echo "Con datos: ";
    }
    else if ($nr == 0)
    {
        echo "Sin datos: ";
    }
    echo "<br>";
    echo "$Query";
    echo "<br>";

    $hayResultados = true;
    while($hayResultados == True) {
        $fila = mysqli_fetch_array($ResultQuery);
        if ($fila) {
            if ($Data_to_Search != "") {
                echo "$fila[0]";
                echo "<br>";
            }
            else {
                echo "$fila[0], $fila[1]";
                echo "<br>";
            }
        }
        else {
            $hayResultados = false;
        }
    }
}

mysqli_free_result($ResultQuery);
mysqli_close($conn);

?>