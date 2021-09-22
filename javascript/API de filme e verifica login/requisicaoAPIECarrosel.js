let posterFilmes = ['tt0198781', 'tt0414387', 'tt1951264', 'tt0434409', 'tt6723592', 'tt2911666', 'tt8228288', 'tt0102926', 'tt0266697', 'tt0213149', 'tt0068646', 'tt0848228' ]

let divPostersss = document.querySelectorAll('.postersss');
let postersss = document.querySelectorAll('.postersss')

for(let i in divPostersss){    
    $.ajax({
    method: 'GET',
    url: `https://www.omdbapi.com/?i=${posterFilmes[i]}&apikey=18c57453`,
    dataType: 'json',
    complete: function (dados) {
        response = dados.responseJSON;
        let criaImage = document.createElement('img')
        let informacoes = document.createElement('div')
        criaImage.classList.add(`teste${i}`)
        informacoes.classList.add('teste')
        informacoes.innerHTML = `<p class='absolute' id='${posterFilmes[i]}'>${response.Plot}</p>`
        criaImage.setAttribute('src', response.Poster)
        criaImage.setAttribute('onclick', `cliquei(${posterFilmes[i]})`)
        postersss[i].appendChild(informacoes)
        divPostersss[i].append(criaImage)
    }

});
}

function cliquei(num){

        alert(document.getElementById(num))
}
