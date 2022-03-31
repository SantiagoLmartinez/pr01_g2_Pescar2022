<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>huellitas database</title>
</head>
<body>
    
    <?php
        require_once('conexion.php');
        $conn=new conexion();
        $querySELECT="SELECT`nombre`, `tipo`, `edad`, `imagen` FROM `mascotas` LIMIT 0,10";
        $result= mysqli_query($conn->conectardb(),$querySELECT);

        //Creo una variable $row (fila) en la cual vamos a guardar la fila que nos da como resultado la consulta SELECT
        while($row = mysqli_fetch_array($result)){
            echo $row['nombre']; 
            echo "<br>";
            echo $row['tipo'];
            echo "<br>";
            echo $row['edad'];
            echo "<br><br>";?>
            <img heigh="70px" src="data:image/jpg;base64,<?php echo base64_encode($row['imagen']); ?>"/><?php
            echo "<br><br>";
        }
    ?>

</body>
</html>