const express = require('express');
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render('home')

})

app.listen(port, () => {
    console.log(`Serviço na porta: ${port}`)
    });