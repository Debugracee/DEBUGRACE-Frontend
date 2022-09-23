var listaGuias = [
    {
        id: 1,
        nome: 'Ciclo Básico',
        imgUrl: "img/ciclobasico.svg"
    },

    {
        id: 2,
        nome: 'Trilha Back-end',
        imgUrl: "img/backend.svg"
    },

    {
        id: 3,
        nome: 'Trilha Front-end',
        imgUrl: "img/frontend.svg"
    },


];

document.addEventListener('DOMContentLoaded', function() {
    // Obtém a div.class = 'produtos-lista'
    var coluna1 = document.querySelector('.guias');
    // Obtém a div.id = 'listaProd'
    var divRow = document.getElementById('listaGuias');
    
    // Percorrer todo array de produtos
    for (var i = 0; i < listaGuias.length; i++) {
  
      // Clona coluna 1 e cria uma nova div
      var colunaClone = coluna1.cloneNode(true);
      // Procura dentro da div clonada pelo elemento que tem a class = card
      var card = colunaClone.querySelector('.card');
  
      // Procura pelo elemento que tem a tag img e remove de dentro do array
      var img = card.getElementsByTagName('img')[0];
      img.setAttribute('src', listaGuias[i].imgUrl)
  
      var cardTitle = card.getElementsByClassName('card-title')[0];
      cardTitle.innerHTML = listaGuias[i].nome;
  
      // INCLUIR DESCRICAO E VALOR no CARD
      var p = card.getElementsByClassName('card-text')[0];
      var span = p.getElementsByTagName('span')[0];
  
     
      p.appendChild(span)
  
      divRow.appendChild(colunaClone);
    }
  
    coluna1.style.display = 'none';
});