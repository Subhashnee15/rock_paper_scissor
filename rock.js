//app.js
// complete logic of game insisde this function
const game = () => {
    let playScore = 0;
    let computerScore= 0;
    let moves = 0;

    // Function to 
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOption = [rockBtn,paperBtn,scissorBtn];
        const computerOption = ['rock','paper','scissors'];

        // Function to start playing game 
        playerOPtion.forEach(option => {
            option.addEventListener('click',funtion () {
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10- moves}`;
                const choiceNumber  = Math.floor(Math.random()*3);
                const computerChoice = computerOption[choiceNumber];
                //Function to check who wins 
                winner(this.innerText,computerChoice)
                // calling gameOver function after 10 moves
                if(moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }

            })
        })

    }
    // function to decide winner 
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer) {
            result.textContent = 'Tie'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = 
                computerScore;
            } else {
                result.textContent = 'Player Won'
                playerSCore++;
                playerScoreBoard.textContent = playerScore;

            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.tetContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        
    }

}
