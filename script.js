function getComputerChoice() {

    let choice = Math.floor(Math.random() *3) +1;
    console.log(choice);

    if (choice == 1) {
        return("piedra");
    } else if (choice == 2) {
        return("papel");
    } else {
        return("tijeras");
    }

}

function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let cpu = computerSelection.toLowerCase();

    if (player == "piedra" && cpu == "piedra" || player == "papel" && cpu == "papel" || player == "tijeras" && cpu == "tijeras") {
        return 1; //Empate
    } else if (player == "piedra" && cpu == "papel" || player == "papel" && cpu == "tijeras" || player == "tijeras" && cpu == "piedra") {
        return 2; //CPU Gana
    } else  {
        return 3; //JUGADOR gana
    }

}

function game() {

    let playerScore = 0, cpuScore = 0;
    let player, cpu = "";
    let winner = 0;
    console.log("¡Empecemos el juego!");
    
    for(i = 1; i <= 5; i++) {

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

    }

    //Ganador
    if (playerScore > cpuScore) {
        console.log("¡Jugador gana con " + playerScore + " puntos!");
    } else if (playerScore < cpuScore) {
        console.log("¡CPU gana con "+cpuScore+" puntos!");
    } else if (playerScore == cpuScore) {
        console.log("¡Empate! ¿Cómo ha sido posible?");
    }

}