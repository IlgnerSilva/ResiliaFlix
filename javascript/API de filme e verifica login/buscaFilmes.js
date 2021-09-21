let search = document.querySelector('#search');
let tituloFilme = document.querySelector('#titulo-filme');
let key = '18c57453'
let pedido = new XMLHttpRequest();

search.addEventListener('input', function () {
  pedido.open("GET", `https://www.omdbapi.com/?t=${this.value.replaceAll(' ', '+')}&apikey=${key}`)
  
  pedido.onerror = function () {
 tituloFilme.innerHTML = `Um erro ocorreu, por favor, tente novamente.`
  }

  pedido.onload = function () {
    if (search.value != '') {
      let guarda = JSON.parse(pedido.responseText)
      if(guarda.Poster == 'N/A' || guarda.Poster == undefined){
        document.querySelector('#poster-filmes').setAttribute('src', '../img/roloDeFilme.jfif')
        tituloFilme.innerHTML = 'Filme não encontrado';
      }else{
        tituloFilme.innerHTML = guarda.Title;
        document.querySelector('#poster-filmes').setAttribute('src', guarda.Poster)
        // document.querySelector('#plot').innerHTML = `Sinopse: ${guarda.Plot}`
      }
    }
  }
  pedido.send();
});