let posterFilmes = ['tt0198781', 'tt0414387', 'tt1951264', 'tt0434409', 'tt6723592', 'tt2911666', 'tt8228288', 'tt0102926', 'tt0266697', 'tt0213149', 'tt0068646', 'tt0848228' ]

let divPostersss = document.querySelectorAll('.posters-filme');


for(let i in divPostersss){    
    $.ajax({
    method: 'GET',
    url: `https://www.omdbapi.com/?i=${posterFilmes[i]}&apikey=18c57453`,
    dataType: 'json',
    complete: function (dados) {
        response = dados.responseJSON;
        let criaImage = document.createElement('img')
        let pSinopse = document.createElement('p')
        let titleFilme = document.createElement('h2')
        pSinopse.classList = 'pSinopse'
        titleFilme.innerHTML = response.Title
        pSinopse.innerHTML = response.Plot
        criaImage.setAttribute('src', response.Poster)
        divPostersss[i].append(titleFilme)
        divPostersss[i].append(criaImage)
        divPostersss[i].append(pSinopse)
    }

});
}
