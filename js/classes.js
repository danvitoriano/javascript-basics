// classe que constrói objetos do tipo Carro
class Carro {

    constructor(modelo, ano) { // construtor recebe 2 argumentos
        this.modelo = modelo; // this indica o contexto da classe
        this.ano = ano;
    }

    idade(anoAtual) { // método que calcula idade do carro
        return anoAtual - this.ano;
    }
}

let date = new Date(); // gera um novo objeto do tipo Date
let ano = date.getFullYear(); // ano com 4 dígitos

let myCarro = new Carro("Ford", 2014); // instancia um novo objeto Carro

document.getElementById("classes").innerHTML =
    "Meu carro tem " + myCarro.idade(ano) + " anos de uso.";