let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt("Informe o nome da Nave");
    spaceship.type = prompt("Informe o Tipo da Nave");
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"));
}

function acelerate(){
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"));
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity){
        alert("VELOCIDADE MÀXIMA ULTRAPASSADA! " + "\nvelocidade da Nave: " + spaceship.velocity + "km/s\n" + "Veocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}