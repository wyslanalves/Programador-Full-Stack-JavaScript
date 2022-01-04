let spaceship = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function(){
        alert("preparando propulsão")
        alert("Lingando computador de bordo")
    }
}

spaceship.velocity = 0;
spaceship.speedUp = function(acceleration){
    this.velocity += acceleration
}

console.log(spaceship)
spaceship.speedUp(spaceship, 10)
console.log(spaceship)