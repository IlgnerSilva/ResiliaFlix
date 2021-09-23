let cadastraNome = document.querySelector('#cadastra-nome')
let labelNome = document.querySelector('#label-nome')

let cadastraIdentidadeRG = document.querySelector('#cadastra-identidade')
let labelIdentidadeRG = document.querySelector('#label-identidade')
let validIdentidade = false;

let cadastraEmail = document.querySelector('#cadastra-email')
let labelEmail = document.querySelector('#label-email')
let validEmail = false;

let cadastraSenha = document.querySelector('#cadastra-senha')
let labelSenha = document.querySelector('#label-senha')
let validSenha = false;

let confirmaSenha = document.querySelector('#confirma-senha')
let labelConfirmaSenha = document.querySelector('#label-confirma-senha')
let validConfirSenha = false;

cadastraIdentidadeRG.addEventListener('keyup', () => {
    if (cadastraIdentidadeRG.value.length < 8 || cadastraIdentidadeRG.value.length > 9) {
        labelIdentidadeRG.style.color = 'red'
        labelIdentidadeRG.innerHTML = "O número de identidade não é válido"
        validIdentidade = false;
    } else {
        labelIdentidadeRG.style.color = 'green'
        labelIdentidadeRG.innerHTML = "Identidade (RG) OK"
        validIdentidade = true;
    }
})

function validateEmail(email) {
    var validacao = /\S+@\S+\.\S+/;
    return validacao.test(email);
}

cadastraEmail.addEventListener('keyup', () => {
    if (validateEmail(cadastraEmail.value) == false) {
        labelEmail.style.color = 'red'
        labelEmail.innerHTML = "Email inválido"
        validEmail = false;
    } else {
        labelEmail.style.color = 'green'
        labelEmail.innerHTML = "Email OK"
        validEmail = true;
    }
})

cadastraSenha.addEventListener('keyup', () => {
    if (cadastraSenha.value.length <= 4) {
        labelSenha.style.color = 'red'
        labelSenha.innerHTML = "A senha dever ter no minimo 5 caracteres"
        validSenha = false;
    } else {
        labelSenha.style.color = 'green'
        labelSenha.innerHTML = 'A senha está ok'
        validSenha = true;
    }
})

confirmaSenha.addEventListener('keyup', () => {
    if (confirmaSenha.value != cadastraSenha.value) {
        labelConfirmaSenha.style.color = 'red'
        labelConfirmaSenha.innerHTML = "A senhas não conferem"
        validConfirSenha = false;
    } else {
        labelConfirmaSenha.style.color = 'green'
        labelConfirmaSenha.innerHTML = "Senhas iguais"
        validConfirSenha = true;
    }
})

function cadastrar() {
    if (validIdentidade && validEmail && validSenha && validConfirSenha) {
        document.querySelector('#msg-error').style.display = 'none'
        document.querySelector('#msg-success').style.display = 'block'
        document.querySelector('#msg-success').innerHTML = '<strong>Aguarde um momento cadastrando usuário</strong>'


        let listaUsuario = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUsuario.push({
            nome: cadastraNome.value,
            identidade: cadastraIdentidadeRG.value,
            email: cadastraEmail.value,
            senha: cadastraSenha.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUsuario));
        setTimeout(() => {
            document.querySelector('#msg-success').innerHTML = '<strong>Usuário cadastrado com succeso</strong>'
        }, 3000)

        setTimeout(() => {
            window.location.href = '../index.html'
        }, 5000)

    } else {
        document.querySelector('#msg-success').style.display = 'none'
        document.querySelector('#msg-error').style.display = 'block'
        document.querySelector('#msg-error').innerHTML = '<strong>Preencha todos os campos *obrigatorios</strong>'
    }

}

document.querySelector('.btnCadastrar').addEventListener('click', cadastrar);
