(function(){
    let formName = document.querySelector("#formName")
    let button = document.querySelector("#formContainer button")
    let textoDOM = document.querySelector("#textoDOM")
    
    formName.focus() // foca no campo ao carregar a página

    button.onclick = function(e){
        e.preventDefault() // evita o comportamento padrão do formulário
        textoDOM.innerHTML = "Botão Clicado " + formName.value    
    }
})()