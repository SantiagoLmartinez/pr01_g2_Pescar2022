<?php

//Con esta instruccion hago que vuelva a cargar la pagina formulario.html una vez que hace el envio de los datos
//https://huellitas-grupo2.000webhostapp.com/huellitas/formulario.html'
//header('Location: https://huellitas-grupo2.000webhostapp.com/huellitas/formulario.html');
//


header('Location: https://huellitas-grupo2.000webhostapp.com/huellitas/formulario.html');
require_once('conexion.php');


$nombre=$_GET['nombre'];
$tipo_animal=$_GET['tipo_animal'];
$edad=$_GET['edad'];


$conn=new conexion();

//INSERT INTO `mascotas` (`nombre`, `tipo`, `edad`) VALUES ('collin', 'perro', '8');
//UPDATE `mascotas` SET `nombre`='collin',`tipo`='perro',`edad`='8' WHERE 1;

//Hacemos la consulta de SQL para actualizar tabla mascotas
//$queryUPDATE="UPDATE `mascotas` SET `tipo` = '$tipo_animal', `edad` = '$edad' WHERE `mascotas`.`nombre` = '$nombre';";

//Hacemos la consulta de SQL para insertar una nueva mascota
$queryUPDATE="INSERT INTO `mascotas` (`nombre`,`tipo`,`edad`) VALUES ('$nombre', '$tipo_animal', '$edad');";

//primer parametro la conexion, el segundo la consulta
$update= mysqli_query($conn->conectardb(),$queryUPDATE);


?>