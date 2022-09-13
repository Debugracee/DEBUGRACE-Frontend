const btnCicloBasico = document.getElementById('btn-cicloBasico');
const contentCicloBasico = document.getElementById('content-cicloBasico');
const btnFrontEnd = document.getElementById('btn-frontEnd')
const contentFrontEnd = document.getElementById('content-frontEnd')
const btnBackEnd = document.getElementById('btn-backEnd')
const contentBackEnd = document.getElementById('content-backEnd')

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
