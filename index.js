const express = require("express");
const jwt = require('jsonwebtoken');
const auth = require("../DEBUGRACE-Backend/controllers/Middleware/auth");
// const auth = require("../DEBUGRACE-Backend/controllers/Middleware/auth");



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
  // let usuario = require("../../model/usuarios");
  // const usuarios = await usuario.findAll();
  // return res.status(201).json({usuario: usuarios})
  res.render("ciclo-basico")




//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split("  ")[1]; 
//   const secret = process.env.SECRET;
    
 
  
// try {
//    if(jwt.verify(token, secret)) {
//     res.render('ciclo-basico')
//     next()
//   } else {
//     res.redirect("/login")
//   }
// } catch (error) {
//   console.log(error)
// }
     

  // const usuario = require("../DEBUGRACE-Backend/model/usuarios");
  // const { email } = req.body
  // const result = await usuario.findOne({ where: { email } });

  

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
