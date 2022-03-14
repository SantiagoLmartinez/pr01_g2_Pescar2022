// header
const _menu = document.getElementById('menu')
const _btnMenu = document.getElementById('btnMenu')

_btnMenu.addEventListener('click', (e)=>{
    console.log('diste click en el btn menu')
    _menu.classList.toggle('mostrar')
})

const _subMenu__btn = document.querySelectorAll('.subMenu__btn')
for(let i = 0 ; i < _subMenu__btn.length; i++){
    _subMenu__btn[i].addEventListener('click', (e) =>{
        if(window.innerWidth < 1024){
            const _subMenu = document.querySelector('.submenu')
            _subMenu.classList.toggle('mostrarSubMenu')
        }
    })
}


//funciones 

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