// função anônima imediatamente inovocada
// delimita o escopo
(function(){
    function foo1(param) {
        return "foo1 param: " + param
    }
    
    function foo2(param1, param2) {
        let soma = ", soma dos param1 de foo2: " + (param1 + param1);
        return param2 + soma
    }
    
    // passando uma função como parâmetro
    let resultado = foo2(44, foo1(4))
    
    console.log("função como parâmetro: ", resultado)
})()