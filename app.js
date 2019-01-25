 // Required constants to modify html
 const imgPlayerChoice = document.getElementById('playerChoice');
 const imgComputerChoice = document.getElementById('computerChoice');

 const pResult = document.getElementById('result');
 const pScore = document.getElementById('score');

 const buttons = document.querySelectorAll('button');
 const choices = ['rock', 'paper', 'scissors'];
 // Button iterator
 buttons.forEach(
     button => button.addEventListener('click', startGame)
 );

 function startGame(event) {
     // Determine player's choice
     const button = event.currentTarget;
     const playerChoice = button.dataset.choice;
     console.log(playerChoice);

     // Determine computer's choice
     const computerChoice = getComputerChoice();
     console.log(computerChoice);

     // Determine who wins
     const winner = getWinner(playerChoice, computerChoice);
     console.log(`El ganador es ${winner}`);

     //Show results
     if (winner === 'player') {

     } else if (winner === 'computer') {

     } else {

     }

 }

 function getComputerChoice() {
     // Get a random value i (0, 1, 2)
     const i = parseInt(Math.random() * 3);
     // Let's return the choice of computer
     return choices[i];
 }

 function getWinner(playerChoice, computerChoice) {
     if (computerChoice === playerChoice) {
         return null;
     }

     if (playerChoice === 'rock') {
         if (computerChoice === 'paper') {
             return 'computer';
         } else { // Scissors
             return 'player';
         }
     } else if (playerChoice === 'paper') {
         if (computerChoice === 'rock') {
             return 'player';
         } else { // Scissors
             return 'computer';
         }
     } else { // Scissors
         if (computerChoice === 'paper') {
             return 'player';
         } else { // Rock
             return 'computer';
         };
     }
 }