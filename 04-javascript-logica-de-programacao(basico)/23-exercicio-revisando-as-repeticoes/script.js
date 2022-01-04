/**=========================================== */
let spaceshipName = prompt("Qual é o nome da Nave");

let inverName = "";

for(let i = spaceshipName.length -1 ; i >=0; i--){
    if(spaceshipName[i] == "e"){
        break
    }else{
        inverName += spaceshipName[i]
    }
    
}
alert("Nome original da Nave : " + spaceshipName + " Nome invertido com parada na letra 'e' : " +  inverName)
















