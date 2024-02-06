//Aviso

const si = document.querySelector(".si");

si.disabled = true;

document.querySelector(".terminos").addEventListener("click", ()=>{
    si.disabled = false;
    si.style = "background-color: #25b86e;"
})

si.addEventListener("click", ()=>{
    document.querySelector(".aviso").style = "display: none" 
    document.querySelector(".alineador").style = "display: none" 
})
