const express = require("express");

// const usuario = localStorage.getItem("usuario");
// const usuarioObject = JSON.parse(usuario);


// fazer um fetch para pegar informações de usuario
// fazer else if nas rotas para ver se o usuario está preenchido e se tem o statusLogin = true

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/"));

app.get("/pagina-inicial", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/cadastro", (req, res) => {

  res.render("cadastro");
});

app.get("/guia-estudos", (req, res) => {
  res.render("guia-estudos");
});

app.get("/guia-estudos/ciclo-basico", (req, res) => {
  // const usuario = require("../DEBUGRACE-Backend/model/usuarios");
  // const { email } = req.body
  // const result = await usuario.findOne({ where: { email } });
  res.render('ciclo-basico')

  // const usuario = localStorage.getItem("usuario");
  // const usuarioObject = JSON.parse(usuario);
  // const status = usuarioObject.statusLogin
  // if (!email) {
  //   res.render("login")
  // } else {
  // res.render("ciclo-basico");
  // }
 });

app.get("/guia-estudos/back-end", (req, res) => {
  res.render('trilha-backend')
//   if (usuario.statusLogin === true) {
//     res.render("ciclo-basico")
//   } else {
//   res.render("login");
//   }
 });

app.get("/guia-estudos/front-end", (req, res) => {
  res.render('trilha-frontend')
//   if (usuario.statusLogin === true) {
//     res.render("ciclo-basico")
//   } else {
//   res.render("login");
//   }
 });

app.get('/configuracoes', (req, res) => {
    res.render('configuracoes');
});

app.listen(port, () => {
  console.log(`Serviço na porta: ${port}`);
});
