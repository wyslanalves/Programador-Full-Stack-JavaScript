class Spaceship{
  constructor(name, type = "Descpberta"){
    this.name = name
    this.type = type
  }
}

let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Batalha")

console.log(darwin)
console.log(helmet)
