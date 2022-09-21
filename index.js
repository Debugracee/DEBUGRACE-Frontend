const express = require('express');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/pagina-inicial", (req, res) => {
    res.render('home')

});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
});

app.get('/guia-estudos', (req, res) => {
    res.render('guia-estudos')
});

app.get('/configcadastro', (req, res) => {
    res.render('configcadastro')
});

app.listen(port, () => {
    console.log(`Serviço na porta: ${port}`)
    });