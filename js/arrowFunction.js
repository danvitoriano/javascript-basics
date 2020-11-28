// funcional
// o this não varia contexto
const arrowFunction = () => console.log("sou a mais resumida das funções")
const arrowFunctionParam = parametro => console.log("sou a mais resumida das funções passando " + parametro)

arrowFunction()
arrowFunctionParam("parâmetros")