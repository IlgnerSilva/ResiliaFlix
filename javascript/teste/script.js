var search = document.getElementById('search');
var log = document.getElementById('print');

search.addEventListener('keyup', function() {
  log.innerHTML = "Pesquisando: " + this.value;
  
});