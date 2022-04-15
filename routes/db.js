const mysql=require('mysql');
const conexion = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'huellitas'
})

conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('Conexion establecida');
    }
})

conexion.query('create table mascotas(nombre varchar(20), tipo varchar(10), edad integer, cantidad varchar(10), sexo varchar(6), esCastrado varchar(6), condicion varchar(5), condicionDescripcion varchar(500), imagen varchar(100), duenio varchar(20), mail varchar(40), localidad varchar(80), comentarios varchar(500))', function(error, resultado){
if(error){
    console.log('Error en la consulta o la tabla ya existe');
}
else{
    console.log('Se creo la tabla mascotas');
}
})

module.exports=conexion