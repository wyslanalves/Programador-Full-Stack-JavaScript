function greetPilot(name, message = "Olá"){
    alert(message + ", " + name)    
}
greetPilot()

function apeedUp(velocity, unit = "Km/s", acceleration){
    let newVelocity = velocity + acceleration
    alert("Nova velocidade: " + newVelocity + unit)
}
// resultado NAN
apeedUp(50, "mi/s", 20)

function apeedUp(velocity,  acceleration ,unit = "Km/s"){
    let newVelocity = velocity + acceleration
    alert("Nova velocidade: " + newVelocity + unit)
}
// resultado correto seguindo a ordem
apeedUp(50, "mi/s", 20)