let distanceInLY = prompt("Digite a distância em anos-luz");

let chosenOption = prompt("Para qual unidade deseja converter? \n1. Parce(pc)\n2. Unidade Astronômica + \n3. Quilômetors (km)\n\n (Digite o número da opçâo desejada)");

let chosenUnity;
let convertedDistance;

switch (chosenOption){
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601;
        break
    case "2":
        chosenUnity = "Unidade Astronômica";
        convertedDistance = distanceInLY * 63241.1;
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10,12)
        break
    default:
        chosenUnity = "Unidade não identificada";
        convertedDistance = "Conversâo fora do escopo"
};
alert("Distância em Anos-Luz " + distanceInLY + "\n" + chosenUnity + " : " + convertedDistance)