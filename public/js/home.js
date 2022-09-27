// const { dados } = require("./login");
// // import {dados} from './public/js/login'

// import { usuario } from "./public/js/login";

// console.log(dados)

document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuario");
  const usuarioObject = JSON.parse(usuario);
  // console.log(usuario);
  fetch("http://localhost:3500/status", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email: usuarioObject.email }),
  })
    .then((res) => res.json())
    .then((res) => {
        const logado = res.statusLogado;
        const status = logado.statusLogin
        console.log(status)
        if (!status) {
          window.location.assign("http://localhost:5000/pagina-inicial")
        } else {
          console.log(logado) 
          // editar estilização das tags (usuario logado)
        }
      }
     
    );
});
