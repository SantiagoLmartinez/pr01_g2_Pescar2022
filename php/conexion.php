<?php

class conexion{

    //DB en 000WebHost
    const user='id18653150_grupo2';
    const pass='Asdasdasd01*';          //PASSWORD QUE CREAMOS CON EL PROYECTO
    const db='id18653150_huellitas';
    const servidor='localhost';

    public function conectardb(){
        $conectar = new mysqli(self::servidor, self::user,self::pass,self::db);
        if($conectar->connect_error){
            die("Error en la conexion".$conectar->connect_error);
        }
        return $conectar;
    }   
}

?>

