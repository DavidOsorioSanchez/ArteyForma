//Selectores
const btnsOpenModal = document.querySelectorAll(".btn-open-modal");
const llenarCard1 = document.querySelector(".modalBodyCard1");
const contentModal = document.getElementById("content-modal");
const titleModal = document.querySelector(".modal-title")
console.log(btnsOpenModal);

const URL = "http://localhost:3000/procedimientos";

//Eventos
btnsOpenModal.forEach(btn => {
    console.log("click");
    btn.addEventListener('click', (event) => llenarCard(event));

})

//Funciones
async function llenarCard(event) {
    const nombre = event.target.getAttribute("data-name")
    console.log(nombre);
    const response = await fetch(`${URL}?nombre=${nombre}`)
    const data = await response.json()

    data.forEach(info => {

        titleModal.innerHTML = `
            <div class="titleContainer">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${info.nombre}</h1>
            </div>
        `
        contentModal.innerHTML = `    
            <p>${info.descripcion}</p>
            <strong>Tiempo del procedimiento</strong><p>${info.tiempoCx}</p>
            <strong>Anestesia</strong><p>${info.anestesia}</p>
            <strong>Hospitalización</strong><p>${info.hospitalizacion}</p>
            <strong>Recuperación</strong><p>${info.recuperacion}</p>


        `
    })
}