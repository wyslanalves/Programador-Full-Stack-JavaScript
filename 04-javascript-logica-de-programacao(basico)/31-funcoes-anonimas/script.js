let doubleSpeed = function(velocity){
 return velocity * 2
}

let newVelocity = doubleSpeed(40);

console.log(newVelocity)
/**===================== */


console.log(speedUp(60,10));
console.log(doubleSpeed(50))

// as funcoes anonimas tem que seguir as regras da chamada de uma variavel
let doubleSpeed = function(velocity){
    return velocity * 2
}

// declaração tradicional ele e lida antes de todo codigo
function speedUp(velocity, acceleration){
    return velocity + acceleration
}
   
  