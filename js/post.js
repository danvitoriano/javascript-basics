// dados
const endpoint = "https://80cf531af5ffe4f7cc232f83845bfb17.m.pipedream.net"
const body = {"message":"The force is strong with this one..."}
const headers = new Headers()

headers.append("Content-Type", "application/json")

const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
}

//cadastra dados em uma api
fetch(endpoint, options)
    .then(response => {
        return response.json()
    })
    .then(dados => {
        console.log(`dados : ${Object.keys(dados)}`)
        console.log(`cadastro dos dados : ${dados.success}`)
    })
    .catch(err => {
        console.error("[error] " + err.message)
    })
