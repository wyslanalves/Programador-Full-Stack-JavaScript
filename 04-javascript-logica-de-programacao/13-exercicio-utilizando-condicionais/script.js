let nomePiloto = prompt("digite seu nome Piloto");

let velocidadeInicial = 0

let perguntaVelocidade = prompt("Digite a velocidade Desejada");

let confimacaoVelocidade = confirm(`Olá ${nomePiloto} Deseja realmente ir nessa velocidade ${velocidadeInicial} Km/s ?`);

if(confimacaoVelocidade){
    velocidadeInicial = perguntaVelocidade
}
console.log(velocidadeInicial)

if(velocidadeInicial <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
}else if(velocidadeInicial < 40){
    alert("Você está devagar, podemos aumentar mais")
}else if(velocidadeInicial >= 40 && velocidadeInicial < 80){
    alert("Parece uma boa velocidade para manter")
}else if(velocidadeInicial >= 80 && velocidadeInicial < 100){
    alert("Velocidade alta. Considere Diminuir.")
}else{
    alert("Velocidade automático Forçada.")
}

alert(`Piloto ${nomePiloto} Velocidade ${velocidadeInicial}`)