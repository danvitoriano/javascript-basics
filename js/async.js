async function primeiraFuncao() {
    console.log("Hello")
    return "Hello";
}

const segundaFuncao = (valor) =>
    document.getElementById("async").innerHTML = valor

primeiraFuncao()
    .then(
        value => segundaFuncao(value)
    );