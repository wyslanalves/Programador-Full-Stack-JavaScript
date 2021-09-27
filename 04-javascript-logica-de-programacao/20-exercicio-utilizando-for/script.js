let nomeNave = prompt("Digite o nome da Nave");
let letraEscolhida = "";
let spaceshipAtulizada = ""


letraEscolhida = substituirCaractere = prompt("Digite a letra que será substituida da Nave");

let qualCaractereDesejaSubstituir = prompt("Digite a Nova Letra");

for(let i = 0; i < nomeNave.length; i++){
    if(nomeNave[i] == letraEscolhida ){
        spaceshipAtulizada += qualCaractereDesejaSubstituir
    }else{
        spaceshipAtulizada += nomeNave[i]
    }
}
alert(spaceshipAtulizada)