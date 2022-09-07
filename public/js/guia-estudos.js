const btnCard = document.getElementById('btn-card');

function activeCards() {
    const menuCards = document.getElementById('cards');
    menuCards.classList.toggle('active');
    btnCard.classList.toggle('active');
    console.log('funcionou')
}

activeCards()
btnCard.addEventListener('click', activeCards);
