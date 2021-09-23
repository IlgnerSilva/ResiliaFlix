let search = document.querySelector('#search');
let tituloFilme = document.querySelector('#titulo-filme');
let key = '18c57453'
let requisicao = new XMLHttpRequest();

function buscaFilmeModal(dados){
  document.querySelector('#score').innerHTML = `<strong>Score: </strong>${dados.imdbRating}`
  document.querySelector('#year').innerHTML = `<strong>Ano: </strong>${dados.Year}`
  document.querySelector('#runtime').innerHTML = `<strong>Duração: </strong>${dados.Runtime}`
  document.querySelector('#rated').innerHTML = `<strong>Indicação Faixa Etária: </strong>${dados.Rated}`
  document.querySelector('#genere').innerHTML = `<strong>Genero do Filme: </strong>${dados.Genre}`
  document.querySelector('#director').innerHTML = `<strong>Diretor: </strong>${dados.Director}`
  document.querySelector('#actors').innerHTML = `<strong>Elenco: </strong>${dados.Actors}`
  document.querySelector('#sinopse-modal').innerHTML = `<strong>Sinopse: </strong>${dados.Plot}`
  document.querySelector('.poster-descricao').setAttribute('src', dados.Poster)
}

function buscaFilme(dados){
  if(dados.Poster == 'N/A' || dados.Poster == undefined){
    document.querySelector('#poster-filmes').setAttribute('src', '../img/logo.jpg')
    tituloFilme.innerHTML = 'Filme não encontrado';
  }else{
    tituloFilme.innerHTML = dados.Title;
    document.querySelector('#poster-filmes').setAttribute('src', dados.Poster)
  }
}

search.addEventListener('input', function () {
  requisicao.open("GET", `https://www.omdbapi.com/?t=${this.value.replaceAll(' ', '+')}&apikey=${key}`)
  
  requisicao.onerror = function () {
 tituloFilme.innerHTML = `Um erro ocorreu, por favor, tente novamente.`
  }

  requisicao.onload = function () {
    if (search.value != '') {
      document.querySelector('.informacoes').style.display = 'flex'
      let converte = JSON.parse(requisicao.responseText)
      buscaFilme(converte)
      buscaFilmeModal(converte)
    }else{
      document.querySelector('.informacoes').style.display = 'none'
    }
  }
  requisicao.send();
});