const content = document.getElementById("content");
const text = document.getElementById("content-text");

function activeContent() {
  text.classList.toggle("active");
  content.classList.toggle("active");
  console.log("funcionou");
}

content.addEventListener("click", activeContent);

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

fetch("http://localhost:3500/trilhas")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    const trilhas = res.trilhas;
    console.log(trilhas);
    //enviar(res.usuarios[0].cep)
    trilhas.map((trilha) => {
      console.log(trilha);
      // preciso percorrer todo o elemento do button
      const getId = document.querySelector("#btn-logicaProgramacao");
      const p = document.querySelector("#text");
      p.innerHTML = trilha.descricao;
      // getId.appendChild(p)
      const a = document.querySelector("#link");
      a.href = trilha.conteudo;
    });
  });
