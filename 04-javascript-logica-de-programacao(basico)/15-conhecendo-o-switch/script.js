let velocity = 80;

switch(velocity * 2){
    case 100:
        console.log("Sua velocidade é 100km/s");
        break
    case 160:
        console.log("Sua velocidade é 160km/s");
        break
    default:
        console.log("Velocidade não identificada")
}
/**================================================================ */
let spaceship = "Elemental"

switch(spaceship){
    case "Golias":
        console.log("Nave mais resistente");
        break
    case "Raptor":
        console.log("Nave nais rápida");
        break
    case "Enterprise":
        console.log("Nave a Frota Estelar")
        break
    default:
        console.log("Nave Comum")
}
/**=================================================== */
let velocity2 = 90;

//apartir do momento que ele encontra o primerio case ele vai execulta os que vem depois ate encontra o break
switch(velocity2){
    case 80:
    case 90:
    case 100:
        console.log("Velocidade aceitável");
        break
    case 110:
        console.log("Velocidade alta, mas aceitável");
        break
    default:
        console.log("Velocidade não identificada")
}

/**================================================== */
let spaceship2 = "Elemental"

switch(spaceship2){
    case "Golias":
        console.log("Nave mais resistente");
    case "Elemental":
        console.log("Nave com melhor armamento");
    case "Helmet":
        console.log("Rápida ativaçâo de escudo");
    case "Frontier":
        console.log("Nave de infantaria");
        break
    case "Enterprise":
        console.log("Nave a fronta estelar");
    default:
        console.log("Não conheço a nave")
}