
// funcion para imprimir en DOM mascotas p/adoptar
const imprimirMascotasDom = () =>{
// Pizarra de adopcion
    const _mascotaContainer = document.querySelector('#mascotaContainer')
//template pizarra de adopcion
    const _templatePizarraAdopciones = document.getElementById('templatePizarraAdopciones').content
    // se crea un fragmento del documento
    const _fragment = document.createDocumentFragment()
    // para recorrer el array de mascotasDb
    mascotasDb.forEach(mascota =>{
        _templatePizarraAdopciones.querySelector('img').setAttribute('src',mascota.img)
        _templatePizarraAdopciones.querySelector('h5').textContent =`${mascota.tipo} de ${mascota.edad} ${mascota.zona }` 
        _templatePizarraAdopciones.querySelector('p').textContent =`${mascota.observaciones}` 
        _templatePizarraAdopciones.querySelector('button').dataset.id = `${mascota.id}`
        // se hace un clon del template
        const _clone = _templatePizarraAdopciones.cloneNode(true)
        // se añade un nodo hijo al fragment
        _fragment.appendChild(_clone)
    })
    // se añade un nodo hijo al container del DOM
    _mascotaContainer.appendChild(_fragment)
}
// se llama a la funcion para ejecutarla
imprimirMascotasDom()