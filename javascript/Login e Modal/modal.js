let modalContainer = document.querySelector('.modal-container')

function mostrarModal(){
    if( modalContainer.style.display == 'none'){
        modalContainer.style.display = 'flex'
    }else{
        modalContainer.style.display = 'none'
    }
}

document.querySelector('#login').addEventListener('click', mostrarModal);

document.querySelector('.fechar-modal').addEventListener('click', () => {
    document.querySelector('.input-modal').value = ''
    modalContainer.style.display = 'none'
})