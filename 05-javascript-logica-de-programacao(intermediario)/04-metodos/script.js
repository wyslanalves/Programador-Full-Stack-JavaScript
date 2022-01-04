class Spaceship{
  constructor(name){
    this.name = name
    this.velocity = 0
  }

  speedUp(acceleration){
    this.velocity += acceleration
  }
}

let artemis = new Spaceship("Àrtemis")
artemis.speedUp(10)
artemis.speedUp(10)
console.log(artemis)
