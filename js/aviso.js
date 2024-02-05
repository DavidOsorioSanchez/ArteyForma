//Aviso

const si = document.querySelector(".si");

si.disabled = false;

document.querySelector(".terminos").addEventListener("click", ()=>{
    si.disabled = true;
    si.style = "background-color: #25b86e;"
})

si.addEventListener("click", ()=>{
    document.querySelector(".aviso").style = "display: flex" 
    document.querySelector(".alineador").style = "display: flex" 
})
