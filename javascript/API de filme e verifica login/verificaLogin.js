if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar');
    window.location.href = '../index.html';
}


let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
let logado = document.querySelector('#logado');
logado.innerHTML = `Olá ${usuarioLogado.nome}`


function sair(){
    localStorage.removeItem('token');
    window.location.href = '../index.html';
}

document.querySelector('#btn-sair').addEventListener('click', sair)