var search = document.getElementById('search');
var log = document.getElementById('print');
let pedido = new XMLHttpRequest();

search.addEventListener('input', function () {
  pedido.open("GET", `https://www.omdbapi.com/?t=${this.value}&apikey=18c57453`)
  console.log(pedido)
  console.log(this.value.replaceAll(' ', '+'))
  pedido.onerror = function () {
    log.innerHTML = `Um erro ocorreu, por favor, tente novamente.`
  }

  pedido.onload = function () {
    if (search.value != '') {
      let guarda = JSON.parse(pedido.responseText)
      console.log(guarda)
      log.innerHTML = "Pesquisando: " + guarda.Title;
      let cria = document.createElement('img')
      cria.setAttribute('src', guarda.Poster)
      let sinopse = document.getElementById('plot')
      sinopse.innerHTML = `Sinopse: ${guarda.Plot}`
      document.querySelector('body').prepend(cria)
    }
  }
  pedido.send();
});
