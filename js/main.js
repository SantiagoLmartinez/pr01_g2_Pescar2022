// console.log('javascript conectado al html')
const _mascotaContainer = document.querySelector('#mascotaContainer')

_mascotaContainer.innerHTML = `
<div class="card" style="width: 18rem;">
<img src="${mascotasDb[0].img}" class="card-img-top" alt="img-mascota">
<div class="card-body">
    <h5 class="card-title">${mascotasDb[0].tipo}  </h5>
    <p class="card-text">${mascotasDb[0].observaciones}</p>
    <a href="#" class="btn btn-primary w-100">Adoptar</a>
</div>
</div>
`