const { usuario } = require("./js/login");

document.addEventListener("DOMContentLoaded", () => {
  usuario;
  console.log(usuario);
  fetch("http://localhost:3500/status", {
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email: usuario.email }),
  })
    .then((res) => res.json())
    .then(
      (res) => console.log(res)
      // editar estilização das tags (usuario logado)
    );
});