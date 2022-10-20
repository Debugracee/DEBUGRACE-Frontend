// const content = document.getElementById("content");
// const text = document.getElementById("content-text");

// function activeDadosAlgoritmo() {

//     textDadosAlgoritmos.classList.toggle('active');
//     btnDadosAlgoritmos.classList.toggle('active');
//     console.log('funcionou')
// }

// btnDadosAlgoritmos.addEventListener('click', activeDadosAlgoritmo);

// function activeGit() {

//     textGit.classList.toggle('active');
//     btnGit.classList.toggle('active');
//     console.log('funcionou')
// }

// btnGit.addEventListener('click', activeGit);

const usuario = localStorage.getItem("usuario");
const token = localStorage.getItem("token");
const tokenObject = JSON.parse(token);
const usuarioObject = JSON.parse(token);
console.log(tokenObject);
if(!usuarioObject || !tokenObject) {
  window.location.assign("http://localhost:5000/login");
} else {
  const configElement = document.querySelector("#item1");
  const logoutButton = document.querySelector("#item2");

  configElement.innerHTML = "CONFIGURAÇÕES";
  configElement.href = "/configuracoes";
  logoutButton.innerHTML = "SAIR";
  logoutButton.removeAttribute("href");
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario");
    fetch("http://localhost:3500/deslog", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: usuarioObject.email }),
    }).then((res) => res.json());
    window.location.assign("http://localhost:5000/login");
  });
}

fetch("http://localhost:3500/trilhas")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const trilhas = res.trilhas;
    console.log(trilhas);
    trilhas
      .filter((t) => t.trilha === "ciclo_basico")
      .map((trilha) => {
        console.log(trilha);
        const li = document.createElement("li");
        li.classList.add("content");
        const lista = document.getElementById("lista");
        lista.appendChild(li);
        const title = document.createElement("h5");
        const text = document.createElement("div");
        text.classList.add("content-text");
        const p = document.createElement("p");
        const a = document.createElement("a");
        a.innerHTML = "Clique aqui para acessar o conteúdo";
        a.target = "_blank"
        text.appendChild(title);
        text.appendChild(p);
        text.appendChild(a);
        li.appendChild(text);
        title.innerHTML = trilha.conteudo;
        p.innerHTML = trilha.descConteudo;
        a.href = trilha.pdfConteudo;
      });
  });
