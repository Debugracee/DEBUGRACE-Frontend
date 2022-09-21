console.log('Javascript funcionando')

const tituloPost = document.getElementById('title')
const conteudoPost = document.getElementById('content')
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    criarPost()
    console.log('clicou')

})

tituloPost.addEventListener()
conteudoPost.addEventListener()


function criarPost() {
    let newPost = {
        nome: tituloPost.value.trim(),
        conteudo: conteudoPost.value.trim()
    }

    fetch("http://localhost:3500/post", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newPost),
      }).then((res) => res.json())
}