// aqui não podemos usar marcaCarro

var nomeCarro = "Corolla"; // escopo global

myFunction() // chamando a função que defina paisCarro como global

console.log("país carro: ", paisCarro) // escopo global (não recomendado)

function myFunction() {
  var marcaCarro = "Toyota"; // escopo local (válido dentro da função apenas)
  paisCarro = "Japão"; // declarada váriavel global mesmo dentro de uma função (não recomendado)
  console.log("marcaCarro: ", marcaCarro);
  console.log("nomeCarro: ", nomeCarro); // aqui podemos usar nomeCarro também
}

