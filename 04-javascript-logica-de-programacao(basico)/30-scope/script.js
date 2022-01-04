//escopo global
let spaceshipName = "Supernova"

function changeSpaceshipName(){
    spaceshipName = "Elemental"
}

console.log(spaceshipName)
changeSpaceshipName()
console.log(spaceshipName )

/**=================================== */

//escopo local
function startSpaceshipVelocity(){
    let spaceshipVelocity = 0
}

startSpaceshipVelocity()
console.log(spaceshipVelocity)

/**====================== */

function setSpaceshipDetails(){
    let velocity = 50;
    if(velocity == 50){
        velocity = 60
        var spaceshipName = "Elemental";
        let spaceshipType = "Discovery";
    }

    console.log(velocity);
    console.log(spaceshipName);
    console.log(spaceshipType);
}

setSpaceshipDetails()
/**==================== */

function setSpaceshipDetails2(){
    console.log(spaceshipName);
    console.log(spaceshipType);
    var spaceshipName = "Elemental";
    let spaceshipType = "Discovery";
    console.log(spaceshipName);
    console.log(spaceshipType)
}

setSpaceshipDetails2()