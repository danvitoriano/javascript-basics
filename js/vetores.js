//arrays, matrizes
frutas = ["Banana", "Laranja", "Abacaxi", "Manga"];

let primeira = frutas[0] // índice da lista
let indice = frutas.indexOf("Laranja") // busca por índice
let tamanhoArray = frutas.length // tamanho da lista

frutas.push("Uva", "Morango", "Kiwi") // adiciona novo item no fim da lista

console.log("primeiro item do array: ", primeira)
console.log("índice do array: ", indice)
console.log("tamanho do array: ", tamanhoArray)
console.log("tamanho do array após push: ", frutas.length)
console.log(frutas)

frutas.pop() // retira último item da lista

console.log("novo tamanho do array após pop: ", frutas.length)
