console.log("carregou");

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loginUsuario();
  console.log("clicou");
});

export const usuario = null;

async function loginUsuario() {

  email.addEventListener("keyup", function () {
    if (email.value.trim() === "") {
      alertError(email, "Seu email é obrigatório");
    } else {
      alertSuccess(email);
    }
  });

  password.addEventListener("keyup", function () {
    if (password.value.trim() === "") {
      alertError(password, "Sua senha é obrigatória");
    } else if (password.value.length < 8) {
      alertError(password, "Sua senha deve conter no mínimo 8 caracteres");
    } else {
      alertSuccess(password);
    }
  });

  const user = {
      email: email.value.trim(),
      senha: password.value.trim()
  }

  await fetch("http://localhost:3500/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  }).then(res => res.json())
  .then((res) => {
    usuario = res;
  })
  
}

function alertError(input, message) {
  const control = input.parentElement;
  const small = control.querySelector("small");

  // Adc mensagem de erro
  small.innerText = message;

  // acionar a class de erro
  control.className = "form-container error";
}

function alertSuccess(input) {
  const control = input.parentElement;
  control.className = "form-container success";
}
