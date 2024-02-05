// Reloj

setInterval(myTimer, 500);

function myTimer() {
    const date = new Date();
    document.getElementById("reloj").innerHTML = date.toLocaleTimeString();
}

// aviso

// const si = document.querySelector(".si");

// si.disabled = true;

// document.querySelector(".terminos").addEventListener("click", ()=>{
//     si.disabled = false;
//     si.style = "background-color: #25b86e;"
// })

// si.addEventListener("click", ()=>{
//     document.querySelector(".aviso").style = "display: none" 
//     document.querySelector(".alineador").style = "display: none" 
// })

// Hamburguesa

const hamburguesa = document.getElementById("hamburguesa")

hamburguesa.addEventListener("click", (event)=>{
    inteructor();
})

let numero = 0;

function inteructor(){
    
    if(numero == 0){
        numero--
        document.querySelector(".terceraBarra").style = "display: flex;"
    }else{
        numero++
        document.querySelector(".terceraBarra").style = "display: none;"
    }
}


