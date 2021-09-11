var search = document.getElementById('search');
var log = document.getElementById('print');
let pedido = new XMLHttpRequest();

search.addEventListener('keyup', function() {
    pedido.open("GET", `https://www.omdbapi.com/?t=${this.value}&apikey=18c57453`)
    console.log(pedido)
    console.log(this.value)
    
    pedido.onload = function(){
        let guarda = JSON.parse(pedido.responseText)
        console.log(guarda)
        log.innerHTML = "Pesquisando: " + guarda.Plot;
        document.querySelector('img').setAttribute('src', guarda.Poster)
  }
  
  
  pedido.send();
});



