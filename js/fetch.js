//requisita dados de uma api
fetch("http://evening-badlands-20922.herokuapp.com/financas/semana") // get na rota
    .then( // se a requisição retornar como resolvida 
        function(response){
            return response.json() // converte os dados recebidos em string para JSON (JavaScript Object Notation)
        }
    )
    .then( // o que fazer em seguida
        data => console.log(data) // arrow function - o this não muda o contexto
    )
    .catch( // se a requisição retornar como rejeitada (problema)
        error => console.log(error) // captura o erro
    )
