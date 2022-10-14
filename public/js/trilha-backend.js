const usuario = localStorage.getItem("usuario");
const token = localStorage.getItem("token");
const tokenObject = JSON.parse(token);
const usuarioObject = JSON.parse(token);
console.log(tokenObject);
if (usuarioObject || tokenObject === null) {
  window.location.assign("http://localhost:5000/login");
} else {
  const configElement = document.querySelector("#item1");
  const logoutButton = document.querySelector("#item2");

  configElement.innerHTML = "CONFIGURAÇÕES";
  configElement.href = "/configuracoes";
  logoutButton.innerHTML = "SAIR";
  logoutButton.removeAttribute("href");
  logoutButton.addEventListener("click", () => {
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
    //enviar(res.usuarios[0].cep)
    trilhas
      .filter((t) => t.trilha === "back_end")
      .map((trilha) => {
        console.log(trilha);
        const li = document.createElement("li");
        li.classList.add("content");
        const lista = document.getElementById("lista");
        lista.appendChild(li);

        // const contentTitle = document.createElement("div");
        const title = document.createElement("h5");
        // title.title = "../svg/logicaDeProgramacao.svg";
        // contentTitle.appendChild(title);
        const text = document.createElement("div");
        text.classList.add("content-text");
        // const p = document.querySelector("#text");
        const p = document.createElement("p");
        // p.innerHTML = trilha.descricao;
        // getId.appendChild(p)
        // const a = document.querySelector("#link");
        const a = document.createElement("a");
        a.innerHTML = "Clique aqui para acessar o conteúdo";
        // a.href = trilha.conteudo;
        text.appendChild(title);
        text.appendChild(p);
        text.appendChild(a);
        // li.appendChild(contentTitle);
        li.appendChild(text);
        title.innerHTML = trilha.conteudo;
        p.innerHTML = trilha.descConteudo;
        a.href = trilha.pdfConteudo;
        // const id = li.id = trilha.id

        // function activeContent() {
        //   const li = document.querySelector(".content");
        //   for (var i = id; i < id.length; i++) {
        //     console.log(i);
        //     // more statements
        //  }

        // //   if(id){
        // //     text.classList.toggle("active")
        // //   li.classList.toggle("mudar");
        // //   console.log("funcionou");
        // // }
        // }

        // li.addEventListener("click", activeContent);
        // preciso percorrer todo o elemento do button

        // colocar dentro de li

        // pegar com className a div com a imagem e colocar o titulo
        // pegar com className a div com o texto e ancora e agregar desc e conteudo
        // colocar essas divs dentro do elemento li e colocar o elemento li dentro do elemento ul
      });
  });
