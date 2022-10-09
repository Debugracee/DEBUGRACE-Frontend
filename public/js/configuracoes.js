console.log("carregou");
const mudarNome = document.getElementById("nome");
const mudarEmail = document.getElementById("email");
const mudarNascimento = document.getElementById("data");
const mudarGenero = document.getElementById("gender");
const mudarSenha = document.getElementById("password");
const btnNome = document.getElementById("btnNome");
const btnEmail = document.getElementById("btnEmail");
const btnData = document.getElementById("btnData");
const btnGender = document.getElementById("btnGender");
const btnSenha = document.getElementById("btnSenha");

btnNome.addEventListener("click", () => {
  mudarNome.removeAttribute("disabled");
});
btnEmail.addEventListener("click", () => {
  mudarEmail.removeAttribute("disabled");
});
btnData.addEventListener("click", () => {
  mudarNascimento.removeAttribute("disabled");
});
btnGender.addEventListener("click", () => {
  mudarGenero.removeAttribute("disabled");
});
btnSenha.addEventListener("click", () => {
  mudarSenha.removeAttribute("disabled");
});

const usuario = localStorage.getItem("usuario");
const token = localStorage.getItem("token");
const usuarioObject = JSON.parse(usuario);
const tokenObject = JSON.parse(token);
console.log(tokenObject);

if (tokenObject === null) {
  window.location.assign("http://localhost:5000/login");
} else {
  fetch("http://localhost:3500/status", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email: usuarioObject.email || usuarioAlteradoObject.email }),
  })
    .then((res) => res.json())
    .then((res) => {
      const logado = res.statusLogado;
      const status = logado.statusLogin;
      console.log(status);
      if (!status && tokenObject === null) {
        window.location.assign("http://localhost:5000/login");
        // colocar a estilizacao "normal aqui" -> carregar modal
      } else {
        // transformar isso me funcao(talvez) por se repetir mt no site
        console.log(logado);
        const configElement = document.querySelector("#item1");
        const logoutButton = document.querySelector("#item2");

        configElement.innerHTML = "CONFIGURAÇÕES";
        configElement.href = '/configuracoes';

        logoutButton.innerHTML = "SAIR";
        logoutButton.removeAttribute("href");
        logoutButton.addEventListener("click", () => {
          fetch("http://localhost:3500/deslog", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email: usuarioObject.email }),
          }).then((res) => res.json());
          localStorage.removeItem("token");
          localStorage.removeItem("usuario");
          window.location.assign("http://localhost:5000/login");
        });
        // editar estilização das tags (usuario logado)

        mudarNome.value = usuarioObject.nome;
        mudarEmail.value = usuarioObject.email;
        // mudarNascimento.value = usuarioObject.nascimento
        mudarGenero.value = usuarioObject.genero;
        mudarSenha.value = usuarioObject.senha;
      }
    });
}

const btnSave = document.getElementById("btnSalvar");
const btnDelete = document.getElementById("btnSalvar");

btnSave.addEventListener("click", () => {
  fetch(`http://localhost:3500/usuario/${usuarioObject.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      nome: mudarNome.value.trim(),
      email: mudarEmail.value.trim(),
      nascimento: mudarNascimento.value.trim(),
      genero: mudarGenero.value.trim(),
      senha: mudarSenha.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const usuarioAtualizado = res.usuarioAlterado;
      localStorage.setItem(
        "usuarioAtualizado",
        JSON.stringify(usuarioAtualizado)
      );
      localStorage.removeItem("usuario")
      const usuarioAlterado = localStorage.getItem("usuarioAtualizado");
      const usuarioAlteradoObject = JSON.parse(usuarioAlterado);
      mudarNome.value = usuarioAlteradoObject.nome;
      mudarEmail.value = usuarioAlteradoObject.email;
      // mudarNascimento.value = usuarioAlteradoObject.nascimento
      mudarGenero.value = usuarioAlteradoObject.genero;
      mudarSenha.value = usuarioAlteradoObject.senha;
    });
  // quando altera o usuario, é preciso carregar um novo storage
  // alterar a lógiac das outras páginas para carregar quando tiver um usuario ou um usuario alterado
  // fazer validacao onde se nao houver token, ele vai chamar a rota de deslog
  // pego o storage do usuario e colocar cada atributo do usuario atual dentro dele
  // localstorage.nome = usuarioAtualizado.nome -- sla acho que da bom(seguir essa logica)
});
