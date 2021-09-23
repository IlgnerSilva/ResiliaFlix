function entrar(){
    let labelValidaEmail = document.querySelector('#label-valida-email');
    let validaEmail = document.querySelector('#valida-email');

    let labelValidaSenha = document.querySelector('#label-valida-senha');
    let validaSenha = document.querySelector('#valida-senha');

    let listaUsuarios = [];

    let usuarioValido = null

    listaUsuarios = JSON.parse(localStorage.getItem('listaUser'))
  
    listaUsuarios.forEach((item) => {

        if(validaEmail.value == item.email && validaSenha.value == item.senha){
            usuarioValido = {
              nome: item.nome,
              identidade: item.identidade,
              email: item.email,
              senha: item.senha
          }

          console.log(item)
        }
    })

    if(usuarioValido && validaEmail.value == usuarioValido.email && validaSenha.value == usuarioValido.senha){
        window.location.href = './html/buscaFilme.html';

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token);
        
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido))

    }else{
        validaEmail.style.borderColor = 'red'
        labelValidaEmail.style.color = 'red'
        validaSenha.style.borderColor = 'red'
        labelValidaSenha.style.color = 'red'
        document.querySelector('#msg-error').style.display = 'block'
        document.querySelector('#msg-error').innerHTML = '<strong>Usuario ou senha invalido</strong>'
    }
}

document.querySelector('#btn-logar').addEventListener('click', entrar);