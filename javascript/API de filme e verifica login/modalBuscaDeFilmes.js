let modalContainer = document.querySelector('.modal-container')

function mostrarModal(){
    if( modalContainer.style.display == 'none'){
        modalContainer.style.display = 'flex'
    }else{
        modalContainer.style.display = 'none'
    }
}

document.querySelector('#mais-sobre-filmes').addEventListener('click', mostrarModal);

document.querySelector('.fechar-modal').addEventListener('click', () => {
    modalContainer.style.display = 'none'
})