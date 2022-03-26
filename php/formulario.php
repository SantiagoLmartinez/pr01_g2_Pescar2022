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
$sexo=$_POST['sexo'];
$es_castrado=$_POST['es_castrado'];
$cond_medica=$_POST['cond_medica'];
$cond_medica_descripcion=$_POST['cond_medica_descripcion'];
$imagen= addslashes(file_get_contents($_FILES['imagen']['tmp_name']));
$dueño_nombre=$_POST['dueño_nombre'];
$mail=$_POST['mail'];
$localidad=$_POST['localidad'];
$comentarios=$_POST['comentarios'];


$conn=new conexion();

//INSERT INTO `mascotas`(`id`, `nombre`, `tipo`, `edad`, `sexo`, `castrado`, `condicion_medica`, `cond_medica_descripcion`, `imagen`, `dueño_nombre`, `mail`, `localidad`, `comentarios`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13])
//UPDATE `mascotas` SET `nombre`='collin',`tipo`='perro',`edad`='8' WHERE 1;

//Hacemos la consulta de SQL para actualizar tabla mascotas
//$queryUPDATE="UPDATE `mascotas` SET `tipo` = '$tipo_animal', `edad` = '$edad' WHERE `mascotas`.`nombre` = '$nombre';";

//Hacemos la consulta de SQL para insertar una nueva mascota
$queryUPDATE="INSERT INTO `mascotas` (`nombre`, `tipo`, `edad`, `sexo`, `castrado`, `condicion_medica`, `cond_medica_descripcion`, `imagen`, `dueño_nombre`, `mail`, `localidad`, `comentarios`) VALUES ('$nombre', '$tipo_animal', '$edad', '$sexo','$es_castrado','$cond_medica','$cond_medica_descripcion','$imagen','$dueño_nombre','$mail','$localidad','$comentarios');";

//primer parametro la conexion, el segundo la consulta
$result=$update= mysqli_query($conn->conectardb(),$queryUPDATE);

if($result)
{
    echo "La mascota se cargó con exito";
}
else
{
    echo "Error al cargar a la mascota";
}

?>