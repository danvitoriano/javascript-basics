// declaração de objeto literal
let person = {
  firstName: "Danilo",
  lastName: "Vitoriano",
  age: 39,
  eyeColor: "castanho",
};

console.log("objeto: ", person);
console.log("idade: ", person.age); // recupera valores
console.log("primeiro nome: ", person["firstName"]); // outro maneira de recuperar valores

person.age = 40; // modificação de valor

person.status = "single" // criando nova propriedade

console.log("nova idade: ", person.age);
console.log("as propriedades do objeto: ", Object.keys(person));
console.log("os valores do objeto: ", Object.values(person));
console.log(
  "propriedades e valores do objeto como lista: ",
  Object.entries(person)
);

Object.freeze(person); // torna o objeto imutável

person.job = "developer"
console.log("as propriedades do objeto: ", Object.keys(person)); // não é possível alterar o objeto