function setValor(valor) {
  console.log("callback calculado: ", valor)
}

function calculadora(num1, num2, funcaoCallback) {
  let sum = num1 + num2
  funcaoCallback(sum)
}

calculadora(5, 15, setValor)
