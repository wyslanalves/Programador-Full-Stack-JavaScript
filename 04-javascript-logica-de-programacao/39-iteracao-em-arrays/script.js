// forEach percorre e pra cada elemento  chamar o callback que vai declara
let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"];

hitchedSpaceships.forEach(function(currentSpaceship, index){
    console.log("Nave: " + currentSpaceship + "\nIndice: " + index)
})


//====================
//MAP
// modifica o elemento do array um a um  sem alterar o array original
let hitchedSpaceships2 = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"];

let upcasedSpaceships = hitchedSpaceships2.map(function(currentSpaceship){
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

//==================
//FILTER
// filtra os elemntos do array e essa funcão aguarda um returno boolean pra saber se o elemento passou no filtro ou nâo
let hitchedSpaceships3 = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"];

let with7Chars = hitchedSpaceships3.filter(element => {return element.length >= 7 })

//==================
//find
//returna primeiro elemento que satifazer o resltado boolean
let hitchedSpaceships4 = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"];

let with7Chars = hitchedSpaceships4.find(element => {return element.length >= 7 })