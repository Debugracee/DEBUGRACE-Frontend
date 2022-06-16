
console.log('JavaScript Carregado')

const form = document.getElementById('form');
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const password = document.getElementById('password')
const button = document.getElementById('check')

function registerUsers() {
    
    let newUser = {
        nomeCompleto: nome.value.trim(),
        email: email.value.trim(),
        // nascimento: '09/03/2006',
        genero: gender.value.trim()
    }

    fetch('http://localhost:3500/usuario', {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(newUser)
    })
    .then(response => console.log (response));
};


form.addEventListener('submit', (event) => {
    event.preventDefault()
    validationInputs()
    registerUsers()
    console.log('clicou')
});

nome.addEventListener('keyup', function(){
    if(nome.value.trim() === "") {
        alertError(nome, 'Seu nome é obrigatório')
    } else if (nome.value.length < 10) {
        alertError(nome, 'Digite um nome válido')
    }
    else {
        alertSuccess(nome)
    }
    console.log('caracter: ' + nome.value)
});

email.addEventListener('keyup', function(){
    if(email.value.trim() === '') {
        alertError(email, 'Seu email é obrigatório')
    }
    else {
        alertSuccess(email)
    }
});

gender.addEventListener('keyup', function(){
    if(gender.value.trim() === '') {
        alertError(gender, 'Seu gênero é obrigatório')
    } else {
        alertSuccess(gender)
    }
});

password.addEventListener('keyup', function(){
    if(password.value.trim() === '') {
        alertError(password, 'Sua senha é obrigatória')
    } else if (password.value.length < 8) {
        alertError(password, 'Sua senha deve conter no mínimo 8 caracteres')
    } else {
        alertSuccess(password)
    }

})

// agora só falta arrumar o codigo de forma organizada e otimizada. Também criar uma função que gere uma ação depois
// do submit no form após os inputs obedecerem todas as validações

function validationInputs() {

//    new Number(value)
   const nomeValue = nome.value.trim()
   const emailValue = email.value.trim()
   const genderValue = gender.value.trim()
   const passwordValue = password.value.trim()
    
    if(nomeValue === '') {
        alertError(nome, 'Seu nome é obrigatório');
    } else {
        alertSuccess(nome);
    }

    if(emailValue === ''){
        alertError(email, 'Seu email é obrigatório');
    } else {
        alertSuccess(email)
    }

    if(genderValue === '') {
        alertError(gender, 'Seu gênero é obrigatório');

    } else {
        alertSuccess(gender)
    }

    if (passwordValue === '') {
        alertError(password, 'Sua senha é obrigatória')
    } else if(passwordValue.length < 8) {
        alertError(password, 'Sua senha deve conter no mínimo 8 caracteres')

    } else {
        alertSuccess(password)
    }
};

function inputName(){

}

function inputEmail(){

}

function inputGender(){

}

function inputPassword(){

}



function alertError(input, message) {
    const control = input.parentElement;
    const small = control.querySelector('small');

    // Adc mensagem de erro
    small.innerText = message;

    // acionar a class de erro
    control.className = 'form-container error'

}

function alertSuccess(input) {
    const control = input.parentElement;
    control.className = 'form-container success'

//     const formContainer = form.querySelectorAll('form-container')

// // for(let i = 0; i < formContainer.length; i++) {
// //    () => return (control.className = 'form-container success')
// // }

// // const success = control.className = 'form-container success'

// if(formContainer === success) {
//     console.log('muito que bem')
// }

}
