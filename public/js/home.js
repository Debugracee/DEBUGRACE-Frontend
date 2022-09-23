// const { dados } = require("./login");
// // import {dados} from './public/js/login'



// import { usuario } from "./public/js/login";

// console.log(dados)

document.addEventListener("DOMContentLoaded", () => {
const { usuario } = require("./login");
  // console.log(usuario);
  fetch("http://localhost:3500/status", {
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email: usuario.email }),
  })
    .then((res) => res.json())
    .then(
      (res) => {
        const logado = res
        if(logado.usuario.statusLogin === true){
          console.log(logado)
        }
      }
      // editar estilização das tags (usuario logado)
    );
});