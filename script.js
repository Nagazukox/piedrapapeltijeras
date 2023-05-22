//CPU Elige número random entre 1 y 3 y devuelve 1=piedra 2=papel 3=tijeras
function getComputerChoice() {

    let choice = Math.floor(Math.random() *3) +1;
    console.log(choice);

    if (choice == 1) {
        console.log("cpu elige piedra");
        return("piedra");
    } else if (choice == 2) {
        console.log("cpu elige papel");
        return("papel");
    } else {
        console.log("cpu elige tijeras");
        return("tijeras");
    }

}

//Comienza juego con parámetro de jugador y elección de cpu, compara y da resultados
function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let cpu = computerSelection.toLowerCase();

    if (player == "piedra" && cpu == "piedra" || player == "papel" && cpu == "papel" || player == "tijeras" && cpu == "tijeras") {
        console.log("empate");
        return 1; //Empate
    } else if (player == "piedra" && cpu == "papel" || player == "papel" && cpu == "tijeras" || player == "tijeras" && cpu == "piedra") {
        console.log("cpu gana");
        return 2; //CPU Gana
    } else  {
        console.log("ganaste");
        return 3; //JUGADOR gana
    }

}


//Función de juego *OUTDATED*
/*
function game() {

    let playerScore = 0, cpuScore = 0;
    let player, cpu = "";
    let winner = 0;
    
    console.log("¡Empecemos el juego!");
    
        input = prompt("Escribe tu elección (Piedra, papel o tijeras): ");

        player = input.toLowerCase();
        cpu = getComputerChoice();

        console.log("CPU elige "+ cpu);

        winner = playRound(player,cpu);

        if (winner == 1) {
            console.log("¡Empate!");
        } else if (winner == 2) {
            cpuScore = cpuScore+1;
            console.log("¡CPU gana!");
        } else {
            playerScore = playerScore+1;
            console.log("¡Player gana!");
        }
        console.log("Player: " + playerScore);
        console.log ("CPU: " + cpuScore);

    //Ganador
    if (playerScore > cpuScore) {
        console.log("¡Jugador gana con " + playerScore + " puntos!");
    } else if (playerScore < cpuScore) {
        console.log("¡CPU gana con "+cpuScore+" puntos!");
    } else if (playerScore == cpuScore) {
        console.log("¡Empate! ¿Cómo ha sido posible?");
    }

}
*/

const puntos = document.querySelector('#puntos');
const titulo = document.querySelector('#titulo');

let puntuacion = puntos.innerText;
let usuario = +puntuacion.charAt(0);
let robot = +puntuacion.charAt(puntuacion.length - 1);

function actResult(winner) {

    if (winner == 1) {
        titulo.textContent = "¡Empate! Inténtalo de nuevo...";
    } else if (winner == 2) {
        titulo.textContent = "¡Punto para ROBOT! Quién lo iba a decir...";
        robot = robot + 1;
    } else if (winner == 3) {
        titulo.textContent = "Ganaste un punto... Bien... ¿Siguiente elección?";
        usuario = usuario+1;
    }

    if (usuario == 5) {

        puntos.textContent = 0 + " : " + 0;
        titulo.textContent = "Felicidades... Has ganado los 5 puntos antes que ROBOT...";
        usuario = 0;
        robot = 0;
    } else if (robot == 5) {
        puntos.textContent = 0 + " : " + 0;
        titulo.textContent = "¡Jajaja! Robot te ha ganado 5 puntos, perdedor.";
        usuario = 0;
        robot = 0;
    } else {
        puntos.textContent = usuario + " : " + robot;
    }

    
}

//Botones de juego
const piedra = document.querySelector('#piedra');
const papel = document.querySelector('#papel');
const tijeras = document.querySelector('#tijeras');

let result = 0;

//Eventos de botón
piedra.addEventListener("click", () => {

    result = playRound("piedra",getComputerChoice());
    actResult(result);

});

papel.addEventListener("click", () => {

    result = playRound("papel",getComputerChoice());
    actResult(result);

});

tijeras.addEventListener("click", () => {

    result = playRound("tijeras",getComputerChoice());
    actResult(result);

});