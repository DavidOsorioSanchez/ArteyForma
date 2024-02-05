//Selectores y variables globales
const form = document.querySelector(".abajo");
const nameUser = document.getElementById("nombre");
const emailUser = document.getElementById("email");
const ageUser = document.getElementById("edad");
const passwordUser = document.getElementById("password");
const genero = document.getElementById("genero");
const passwordConfirmation = document.getElementById("passwordConfirmation");
const ID = Date.now();
const URL = "http://localhost:3000/users";

form.addEventListener("submit", (elemento) => {
  elemento.preventDefault();

  createUser();
});

async function createUser() {
  //Validar la información
  if (!validatePassword()) {
    showAlert("La contraseña no es valida.");
    return;
  }
  //Validar que el email no esté registrado
  if (await validateEmail()) {
    showAlert("El correo es invalido.");
    return;
  }

  //validador del tipo de sangre
  if (!bloodConfig()) {
    showAlert("No se seleciono el genero.");
    return;
  }

  const user = {
    id: ID,
    name: nameUser.value,
    age: ageUser.value,
    email: emailUser.value,
    password: passwordUser.value,
    gender: genero.value,
  };
  await showHappy(`El login a salido exitoso ${nameUser.value}`);
  try {
    //Crear al usuario

    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    window.location.href = "login.html";
  } catch (error) {
    showAlert("Ocurrió un error al crear el usuario.");
  }
}

function showAlert(msg) {
  Swal.fire({
    title: "Error!",
    text: msg,
    icon: "error",
    showConfirmButton: false,
    timer: 4000,
    toast: "true",
    position: "bottom-left",
  });
}

async function showHappy(surccess) {
  await Swal.fire({
    title: "Good job!",
    text: surccess,
    icon: "success",
  });
}

function validatePassword() {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

  //Validar que las dos contraseñas sean iguales, tengan una minima longitud de 6 caracteres y tengan un caracter especial
  return passwordUser.value === passwordConfirmation.value && regex.test(passwordUser.value);
}

function bloodConfig() {
  return genero.value != "";
}

async function validateEmail() {
  try {
    //
    const response = await fetch(`${URL}?email=${emailUser.value}`);

    const data = await response.json();
    //Si data tiene elementos quiere decir que el email ya está registrado
    console.log(data);
    return data.length;
  } catch (error) {
    return false;
  }
}
