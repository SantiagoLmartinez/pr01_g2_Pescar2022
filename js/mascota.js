class Mascotas {
    constructor(tipo,edad,zona,observaciones,img) {
        this.tipo = tipo,
        this.edad = edad,
        this.zona = zona,
        this.observaciones = observaciones,
        this.img = img
    }
}

let mascotasDb = [
    {
        tipo: "perro",
        edad: "1 año",
        zona: "caba",
        observaciones: "es muy mimoso",
        img: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/6124cf315cafe8c3101f8bab/perro-slide_0.jpg"
}]

const addMascotatoDb = (mascota) => {
    mascotasDb.push(mascota)
}

