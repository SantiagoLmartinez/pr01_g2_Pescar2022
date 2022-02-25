class Mascotas {
    constructor(tipo, edad, zona, observaciones, img) {
        this.tipo = tipo,
            this.edad = edad,
            this.zona = zona,
            this.observaciones = observaciones,
            this.img = img
    }
}

// base de datos 
let mascotasDb = [
    {
        id: 1,
        tipo: "Gato",
        edad: "6 meses",
        zona: "caba",
        observaciones: "es muy mimoso",
        img: "img/gatos/gato.jpg"
    }, {
        id: 2,
        tipo: "Perro",
        edad: "1 año",
        zona: "Zona Oeste",
        observaciones: "se come su caca",
        img: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/6124cf315cafe8c3101f8bab/perro-slide_0.jpg"
    }, {
        id: 3,
        tipo: "Gato",
        edad: "2 meses",
        zona: "Zona sur",
        observaciones: "abandonado y rescatado",
        img: "img/gatos/gato2.jpg"
    }, {
        id: 4,
        tipo: "Gato",
        edad: "1 año",
        zona: "caba",
        observaciones: "es muy mimoso",
        img: "img/gatos/perro3.jpg"
    }]

//  funcion para agregar mascotas a la base de datos
const addMascotatoDb = (mascota) => {
    mascotasDb.push(mascota)
}

