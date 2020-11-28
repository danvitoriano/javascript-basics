"use strict"; // restringe uso inseguro do JavaScript

// requisita uma API de piadas randômicas
async function fetchQuote() {
    const resposta = await fetch("https://api.icndb.com/jokes/random") // aguarda o retorno da API
    const dados = await resposta.json(); // aguarda converter para json
    return dados.value.joke;
}

async function sayJoke() {
    try {
        let result = await fetchQuote(); // aguarda fetchQuote
        document.querySelector("#joke").innerHTML = `Joke: ${result}`
    } catch (err) {
        console.error(err);
    }
}

sayJoke();