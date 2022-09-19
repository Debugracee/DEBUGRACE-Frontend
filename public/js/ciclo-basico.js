const btnLogicaProgramacao = document.getElementById('btn-logicaProgramacao')
const textLogicaProgramacao = document.getElementById('text-logicaProgramacao')
const btnDadosAlgoritmos = document.getElementById('btn-dadosEalgoritmo')
const textDadosAlgoritmos = document.getElementById('text-dadosEalgoritmo')
const btnGit = document.getElementById('btn-gitEgithub')
const textGit = document.getElementById('text-gitEgithub')

function activeLogicaProgramacao() {

    textLogicaProgramacao.classList.toggle('active');
    btnLogicaProgramacao.classList.toggle('active');
    console.log('funcionou')
}

btnLogicaProgramacao.addEventListener('click', activeLogicaProgramacao);

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
    .then(res => res.json ())
    .then(res => { console.log(res)
       const trilhas = res.trilhas;
       console.log(trilhas)
       //enviar(res.usuarios[0].cep)
       trilhas.map(trilha =>{
        console.log(trilha)
        // preciso percorrer todo o elemento do button
        const getId = document.querySelector('#btn-logicaProgramacao')
        const p = document.querySelector('#text')
        p.innerHTML = trilha.descricao
        // getId.appendChild(p)
        const a = document.querySelector('#link')
        a.href = trilha.conteudo
       })
    })