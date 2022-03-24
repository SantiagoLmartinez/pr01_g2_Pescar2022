<?php

//Con esta instruccion hago que vuelva a cargar la pagina formulario.html una vez que hace el envio de los datos
//https://huellitas-grupo2.000webhostapp.com/huellitas/formulario.html'
//header('Location: https://huellitas-grupo2.000webhostapp.com/huellitas/formulario.html');
//


header('Location: https://huellitas-grupo2.000webhostapp.com/huellitas/formulario.html');
require_once('conexion.php');


$nombre=$_POST['nombre'];
$tipo_animal=$_POST['tipo_animal'];
$edad=$_POST['edad'];
$imagen= addslashes(file_get_contents($_FILES['imagen']['tmp_name']));


$conn=new conexion();

//INSERT INTO `mascotas`(`nombre`, `tipo`, `edad`, `imagen`) VALUES ([value-2],[value-3],[value-4],[value-5])
//UPDATE `mascotas` SET `nombre`='collin',`tipo`='perro',`edad`='8' WHERE 1;

//Hacemos la consulta de SQL para actualizar tabla mascotas
//$queryUPDATE="UPDATE `mascotas` SET `tipo` = '$tipo_animal', `edad` = '$edad' WHERE `mascotas`.`nombre` = '$nombre';";

//Hacemos la consulta de SQL para insertar una nueva mascota
$queryUPDATE="INSERT INTO `mascotas` (`nombre`,`tipo`,`edad`, `imagen`) VALUES ('$nombre', '$tipo_animal', '$edad', '$imagen');";

//primer parametro la conexion, el segundo la consulta
$update= mysqli_query($conn->conectardb(),$queryUPDATE);


?>