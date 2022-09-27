document.addEventListener("DOMContentLoaded", () => {
  const usuario = localStorage.getItem("usuario");
  const usuarioObject = JSON.parse(usuario);
  fetch("http://localhost:3500/status", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email: usuarioObject.email }),
  })
    .then((res) => res.json())
    .then((res) => {
      const logado = res.statusLogado;
      const status = logado.statusLogin;
      console.log(status);
      if (!status) {
        window.location.assign("http://localhost:5000/pagina-inicial");
      } else {
        console.log(logado);
        const configElement = document.querySelector("#item1");
        const logoutButton = document.querySelector("#item2");

        configElement.innerHTML = "CONFIGURAÇÕES";
        configElement.href = "/configcadastro";
        logoutButton.innerHTML = "SAIR";
        logoutButton.removeAttribute("href");
        logoutButton.addEventListener("click", () => {
          fetch("http://localhost:3500/deslog", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email: usuarioObject.email }),
          }).then((res) => res.json());
          localStorage.removeItem("usuario");
          window.location.assign("http://localhost:5000/login");
        });
      }
    });
});
