UrlInfo = "http://localhost:3000/users"

document.addEventListener("DOMContentLoaded", ()=>{
    Datos();
})

async function Datos(){
    const focus = await fetch(UrlInfo);
    const info = await focus.json();
    console.log(info);
}

// salir

document.getElementById("salir").addEventListener("click", ()=>{
    window.location.href = "../../html/login.html"
})