let departureDateEntry = prompt("Digite a data de partida (formata DD/MM/YYYY)");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - departureDate;

let chosenOption = prompt(`Escolha como gostaria de exibir o tempo de partida 1- Segundos 2-Minutos 3-Horas 4-Dias`);

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000);
    alert("Tempo de Vôo: " + secondsOfDeparture + " Segundos");
}else if(chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
    alert("Tempo de Vôo: " + minutesOfDeparture + " Minutos");
}else if(chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
    alert("Tempo de Vôo: " + hoursOfDeparture + " Horas");
}else if(chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24);
    alert("Tempo de Vôo: " + daysOfDeparture + " Dias");
}else{
    alert("Opção Inválida")
}