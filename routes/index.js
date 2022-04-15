var express = require('express');
var router = express.Router();
var db=require('./db');
var multer=require('multer');

const storage =multer.diskStorage({
  destination: function(req, file,cb){
    cb(null,'./public/images/')
  },
  filename: function(req, file, cb){
cb(null, file.originalname);
  }
})

const upload= multer({storage: storage})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/formulario', function(req,res){
  res.render('formulario');
})

router.post('/formulario',upload.single('imagen'), function(req,res){
  const registro={
nombre: req.body.nombre,
tipo: req.body.tipo_animal,
edad: req.body.edad,
cantidad: req.body.cantidad,
sexo: req.body.sexo,
esCastrado: req.body.es_castrado,
condicion: req.body.cond_medica,
condicionDescripcion: req.body.cond_medica_descripcion,
imagen: req.file.filename,
duenio: req.body.dueño_nombre,
mail: req.body.mail,
localidad: req.body.localidad,
comentarios: req.body.comentarios
  }
  console.log(registro.imagen);
  db.query('insert into mascotas set?',registro,function(error, resultado){
    if(error){
      throw error;
    }
  })
  res.redirect('/');
})

router.get('/adopciones', function(req,res){
  db.query('select * from mascotas', function (error,filas){
if(error){
  throw error;
}
else{
  res.render('adopciones', { mascotas: filas});
}
  })
})

router.get('/consejosadopcion', function(req,res){
res.render('consejosadopcion');
})

module.exports = router;
