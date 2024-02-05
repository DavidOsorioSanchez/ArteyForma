// const En = document.querySelector(".ingles")
// const Es = document.querySelector(".espanol")
// let prioridad = 0;

// document.querySelector(".eventoTraslate").addEventListener("DOMContentLoaded", (elemental)=>{

//     cambiar();
// })


// document.querySelector(".eventoTraslate").addEventListener("click", (elemental)=>{
//     elemental.preventDefault();

//     cambiar();
// })

// function cambiar(){
//     if(prioridad == 0){
//         prioridad++
//         En.style = "display: flex;"
//         Es.style = "display: none;"
//         alert("ingles")
//     }else{
//         prioridad--
//         En.style = "display: none;"
//         Es.style = "display: flex;"
//         alert("español")
//     }
// }


document.addEventListener("DOMContentLoaded", function () {
    i18next.init(
      {
        lng: "en",
        debug: true,
        resources: {

            
          en: {
            translation: {
                inicionav: "Home",
              greeting: "Good Morning",
              farewell: "Goodbye",
            },
          },
          es: {
            translation: {
                inicionav: "Inicio",
              greeting: "Buenos Días",
              farewell: "Adiós",
            },
          },
        },
      },
      function (err, t) {
        updateContent();
      }
    );

    function updateContent() {
      const elements = document.querySelectorAll(".translate");
      elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = i18next.t(key);
      });
    }

    window.changeLanguage = function (lng) {
      i18next.changeLanguage(lng, updateContent);
    };
  });

