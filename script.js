let titulo = document.querySelector("h1")
let botao = document.querySelector("button")

function alterarH1(){
    titulo.innerText = "H1 alterado por João gesteira"
}

botao.addEventListener("click", alterarH1)