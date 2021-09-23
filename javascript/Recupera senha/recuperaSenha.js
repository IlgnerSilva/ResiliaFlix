let inputRecuperaSenha = document.querySelector('#input-recupera-senha')
let labelRecuperaSenha = document.querySelector('#label-recupera-senha')
let msgSuccess = document.querySelector('#msg-success')

function validateEmail(email) {
    var validacao = /\S+@\S+\.\S+/;
    return validacao.test(email);
}

inputRecuperaSenha.addEventListener('keyup', () => {
    if (validateEmail(inputRecuperaSenha.value) == false) {
        labelRecuperaSenha.style.color = 'red'
        labelRecuperaSenha.innerHTML = "Email inválido"
    } else {
        labelRecuperaSenha.style.color = 'green'
        labelRecuperaSenha.innerHTML = "Email OK"
    }
})

document.querySelector('#btn-recuperar-senha').addEventListener('click', () =>{
    if(validateEmail(inputRecuperaSenha.value) == true){
        labelRecuperaSenha.style.display = 'none'
        inputRecuperaSenha.style.display = 'none'
        msgSuccess.style.display = 'block'
        msgSuccess.innerHTML = 'Email enviado com sucesso'
        setTimeout(()=>{
            window.location.href = '../index.html'
        },2000)
    }else{
        alert('Preencha todos os campos')
    }
})
