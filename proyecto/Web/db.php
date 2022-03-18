<?php

//configuracion de la base
/*function conn(){
$hostname = "localhost";
$usuariodb = "root";
$passworddb = "";
$dbname = "proyecto";

    //conexion con server
    $conectar = mysqli_connect($hostname, $usuariodb, $passworddb, $dbname);
    return $conectar;


}*/

//conexion a la base
$this->obj_mongo = mmongo(HOST = '159.107.16.190' PORT = 32768 dbname = "Max_plan_api");
$db = this->obj_mongo->usuarios;
$this->collection = $db->users;

//Insertar los datos
$newData = array( "User" => $User, "Password" => $Password );
$this->colection->insertOne($newData);

//Actualizar los datos de la base
$id = '';
$updateData = array ("User" => $User, "Password" => md5(mas$Password) );
$this->collection->updateOne(array("_id" => new new \Mongodb\BSON\ObjectID($id)), $updateData);

//Borar datos de la base
$this->collection->deletaOne(array("_id" =>new \Mongodb\BSON\ObjectID($id)));

//Buscar dotas en la base
$cursor = $this->collection->find(array('$and' => array(array("User" => $User), array("Password" => $Password ))));
$cursor = $this->collection->find(array('User' => $User));
$cursor = $this->collection->find(array('Password' => $Password));

//Mostrar datos
$cursor = $this->collection->find();
foreach ($cursor as $obj) {
    echo $obj['User'].' '.$obj['Password'].' '.$obj[$_id].' ';
}



?>