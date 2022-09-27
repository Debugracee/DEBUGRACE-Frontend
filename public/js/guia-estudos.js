const btnCicloBasico = document.getElementById('btn-cicloBasico');
const contentCicloBasico = document.getElementById('content-cicloBasico');
const btnFrontEnd = document.getElementById('btn-frontEnd')
const contentFrontEnd = document.getElementById('content-frontEnd')
const btnBackEnd = document.getElementById('btn-backEnd')
const contentBackEnd = document.getElementById('content-backEnd')


// separar em arquivos javascript diferentes para que esse arquivo nao fique com muitas funcoes diferentes
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
          window.location.assign("http://localhost:5000/guia-estudos");
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
          // editar estilização das tags (usuario logado)
        }
      });
  });

  
function activeContentCicloBasico() {

    contentCicloBasico.classList.toggle('active');
    btnCicloBasico.classList.toggle('active');
    console.log('funcionou')
}

btnCicloBasico.addEventListener('click', activeContentCicloBasico);

function activeContentFrontEnd() {

    contentFrontEnd.classList.toggle('active');
    btnFrontEnd.classList.toggle('active');
    console.log('funcionou')
}

btnFrontEnd.addEventListener('click', activeContentFrontEnd);

function activeContentBackEnd() {

    contentBackEnd.classList.toggle('active');
    btnBackEnd.classList.toggle('active');
    console.log('funcionou')
}

btnBackEnd.addEventListener('click', activeContentBackEnd);
