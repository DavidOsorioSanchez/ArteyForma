//Selectores
const formLogin = document.getElementById("form");
const userEmail = document.getElementById("emailLogin");
const userPassword = document.getElementById("passwordLogin");

const URL = "http://localhost:3000/users";

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  login();
});

async function login() {
  const response = await fetch(`${URL}?email=${userEmail.value}`);
  const data = await response.json();

  if (!data.length) {
    console.log("Email no registrado");
    console.log(userEmail.value);
    return;
  }

  if (data[0].password === userPassword.value) {
    //Autenticar

    localStorage.setItem("isAuthenticated", "true");
    //window es un objeto global que nos permite acceder a la información la ventana
    window.location.href = "../../html/user/principal.html";
  } else {
    console.log("Contraseña incorrecta.");
  }
}
