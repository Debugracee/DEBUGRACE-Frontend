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

function activeDadosAlgoritmo() {

    textDadosAlgoritmos.classList.toggle('active');
    btnDadosAlgoritmos.classList.toggle('active');
    console.log('funcionou')
}

btnDadosAlgoritmos.addEventListener('click', activeDadosAlgoritmo);

function activeGit() {

    textGit.classList.toggle('active');
    btnGit.classList.toggle('active');
    console.log('funcionou')
}

btnGit.addEventListener('click', activeGit);