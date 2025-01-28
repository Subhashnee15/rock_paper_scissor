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

        // Function to statrt playing game 
        playerOPtion.forEach(option => {
            option.addEventListener('click',funtion () {
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10- moves}`;

            })
        })

    }

}
