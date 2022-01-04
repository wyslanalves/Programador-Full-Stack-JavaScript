let warpCount = 0;
let choseOption = "";

let spacechip = prompt("Digite o nome da Nave");

choseOption = prompt("Deseja entrar em dobra espacial?\n 1- sim\n 2- não");

while(chosenOption == "1"){
    warpCount += 1;
    chosenOption = prompt("Deseja entrar em dobra espacial?\n 1- sim\n 2- não")
}
alert(`Nave: ${spaceship} Quanridade de Doubras: ${warpCount}`);

