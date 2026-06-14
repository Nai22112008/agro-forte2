function mostrarMensagem(){
    alert("Bem-vindo ao projeto Agrinho 2026!");
}
let pontos = 0;

function respostaCorreta(botao){

    botao.classList.add("correta");

    pontos++;

    document.getElementById("resultado").innerHTML =
    "Pontuação: " + pontos;
}

function respostaErrada(botao){

    botao.classList.add("errada");
}