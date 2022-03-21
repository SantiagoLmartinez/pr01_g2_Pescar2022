import {optener, optenercoleccion} from"./firebase.js";

let contenido=document.getElementById('contenido')

window.addEventListener('DOMContentLoaded', async (e)=>{
    const querySnapshot= await optener()
    optenercoleccion((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        //console.log(doc.data())
        const dato=doc.data()
        contenido.innerHTML+=`
        <h3>${dato.mascota.nombreMascota}</h3>
        <p>Edad: ${dato.mascota.edad}</p>
        <p>Sexo: ${dato.mascota.sexo}</p>
        <p>Está castrado?: ${dato.mascota.castrado}</p>
        <p>Condición médica: ${dato.mascota.condicion}</p>
        <p>Descripción: ${dato.mascota.descripcion}</p>
        <p>Foto: ${dato.mascota.imagen}</p>
        <p>Nombre del dueño: ${dato.mascota.nombre}</p>
        <p>Correo: ${dato.mascota.correo}</p>
        <p>Teléfono: ${dato.mascota.telefono}</p>
        <p>Dirección: ${dato.mascota.direccion}</p>
        <p>Comentario: ${dato.mascota.comentario}</p>
        `
    })
    })
    })
