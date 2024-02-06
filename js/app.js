// Reloj

setInterval(myTimer, 500);

function myTimer() {
    const date = new Date();
    document.getElementById("reloj").innerHTML = date.toLocaleTimeString();
}

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


