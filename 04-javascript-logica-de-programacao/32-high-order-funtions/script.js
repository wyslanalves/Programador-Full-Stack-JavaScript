/**
 * são funcoes que recebem ou retornam outras funcoes
 */


function doubleVelocity(velocity, printer){
    console.log("Entrei em doubleVelocity");

    let newVelocity = velocity * 2;
    printer(newVelocity)
    return newVelocity
}

let printVelocity = velocity =>{
    console.log("Nova velocidade: " + velocity + "Km/s")
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)
/**================================================ */

function doubleVelocity(velocity, printer){
    console.log("Entrei em doubleVelocity");

    let newVelocity = velocity * 2;
    printer(newVelocity)
    return newVelocity
}

let anotherVelocity = doubleVelocity(50, function(velocity){
    console.log("Otra velocidade: " + velocity)
})