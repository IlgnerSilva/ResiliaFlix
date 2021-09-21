var search = document.getElementById('search');
var log = document.getElementById('print');
let key = '18c57453'
let pedido = new XMLHttpRequest();

search.addEventListener('input', function () {
  pedido.open("GET", `https://www.omdbapi.com/?t=${this.value.replaceAll(' ', '+')}&apikey=18c57453`)
  console.log(pedido)
  console.log(`https://www.omdbapi.com/?t=${this.value.replaceAll(' ', '+')}&apikey=${key}`)
  pedido.onerror = function () {
    log.innerHTML = `Um erro ocorreu, por favor, tente novamente.`
  }

  pedido.onload = function () {
    if (search.value != '') {
      let guarda = JSON.parse(pedido.responseText)
      if(guarda.Poster == 'N/A' || guarda.Poster == undefined){

      }else{
        console.log('e agora',guarda.Poster)
        log.innerHTML = "Pesquisando: " + guarda.Title;
        document.querySelector('img').setAttribute('src', guarda.Poster)
        document.querySelector('#plot').innerHTML = `Sinopse: ${guarda.Plot}`
      }
    }
  }
  pedido.send();
});
