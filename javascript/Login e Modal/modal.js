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

// let posterFilmes = ['tt0198781', 'tt0414387', 'tt1951264', 'tt0434409', 'tt6723592', 'tt0106062', 'tt10838180', 'tt0102926', 'tt0266697', 'tt0213149', 'tt0068646', 'tt0848228' ]
// let pedido = new XMLHttpRequest();

// let array = document.querySelectorAll('.card').forEach((id, item)=>{
//     pedido.open("GET", `https://www.omdbapi.com/?t=2021&apikey=18c57453`)
//     console.log(pedido)
//     pedido.onload = function () {
//         let guarda = JSON.parse(pedido.responseText)

//           console.log('foi')
//           id.innerHTML = `<img src="${guarda.Poster}"></img>`
      
//         }
//     pedido.send();
// })

