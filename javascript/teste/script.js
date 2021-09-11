var search = document.getElementById('search');
var log = document.getElementById('print');
let pedido = new XMLHttpRequest();

search.addEventListener('keyup', function() {
    pedido.open("GET", `https://www.omdbapi.com/?t=${this.value}&apikey=18c57453`)
    console.log(pedido)
    log.innerHTML = "Pesquisando: ";
    console.log(this.value)
    pedido.onload = function(){
      
  }
  
  
  pedido.send();
});



