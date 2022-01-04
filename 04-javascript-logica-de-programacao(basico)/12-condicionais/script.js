let velocity = 90;

if(velocity < 100){
    console.log("Estamos numa velocidade aceitável")
}else{
    console.log("Entrando em velocidade de risco")
}

// condicionais anilhando
if(velocity < 40){
    console.log("Velocidae baixa")
}else{
    if(velocity <= 100){
        console.log("Cuidado! Proximo a velocidade de risco")
    }else{
        console.log("velocidade de Risco!")
    }
}


if(velocity < 40){
    console.log("Velocidae baixa")
}else if(velocity <= 100){
    console.log("Cuidado! Proximo a velocidade de risco")
}else{
    console.log("velocidade de Risco!")
}

// operador ternario
(velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")
