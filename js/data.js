import { agregarMascota } from "./firebase.js";

let alta=document.getElementById('alta')
let nombreMascota=document.getElementById('nombreMascota')
let categoria=document.getElementById('categoria')
let edad=document.getElementById('edad')
let sexo=document.getElementById('sexo')
let castrado=document.getElementById('castrado')
let condicion=document.getElementById('condicion')
let descripcion=document.getElementById('descripcion')
let imagen=document.getElementById('imagen')
let nombre=document.getElementById('nombre')
let correo=document.getElementById('correo')
let telefono=document.getElementById('telefono')
let direccion=document.getElementById('direccion')
let comentario=document.getElementById('comentario')

alta.addEventListener('submit', async e=>{
    e.preventDefault()
const mascota={
    'nombreMascota': nombreMascota.value,
    'categoria': categoria.value,
    'edad': edad.value,
    'sexo': sexo.value,
    'castrado': castrado.value,
    'condicion': condicion.value,
    'descripcion': descripcion.value,
    'imagen': imagen.value,
    'nombre': nombre.value,
    'correo': correo.value,
    'telefono': telefono.value,
    'direccion': direccion.value,
    'comentario': comentario.value
}
await agregarMascota(mascota)
alta.reset()
})
