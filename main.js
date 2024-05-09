const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".botoes");
const contadores = document.querySelectorAll(".contador")
const tempoobijetivo1 = new Date("2024-05-10t00:00:00");

contadores[0].textContent = tempoobijetivo1;

for (let i=0; i<botoes.length;i++){
    botoes[i].onclick=function(){
        for(j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}