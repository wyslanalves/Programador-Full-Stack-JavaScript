let nomePessoaVelha = prompt("Digite o nome da pessoa mais velha");
let idadePessoaVelha = prompt("Digite a idade da pessoa mais velha");

let nomePessoaNova = prompt("Digite o nome da pessoa mais Nova");
let idadePessoaNova = prompt("Digite a idade da pessoa mais Nova");

let calcularIdades = parseInt(idadePessoaVelha) - parseInt(idadePessoaNova);


alert(
    "Pessoa mais velha: " + nomePessoaVelha + "\nIdade:" + idadePessoaVelha +
    "\n\nPessoa mais nova: " + nomePessoaNova + "\nIdade: " + idadePessoaNova +
    "\n\nDifarencia de idade: " + calcularIdades 
    )
