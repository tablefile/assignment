
let userScore = 0; 

let computerScore = 0; 

let currentRound = 0;

const maxRounds = 3; 

/**
 * This function will roll the dice using Math.Random
 * @returns it returns two scores, dice1, and computerDice 
 */

function rollDice() 

{
    const dice1 = Math.floor(Math.random() * 6) + 1; 

    const computerDice = Math.floor(Math.random() * 6) + 1; 

    return [dice1, computerDice];
}

/**
 * This function will use the dice output from the rolldice() function to calculate 
 * the score based on the 
 * @param {*} dice 
 * @returns This will return the score. 
 */


function calculateScore(dice) 

{
    const [dice1, computerDice] = dice;


    if (dice1 === 1 || computerDice === 1) 
        {
        return 0; 
        
    } else if (dice1 === computerDice) 
        {
        return (dice1 + computerDice) * 2; 


    } else {
        return dice1 + computerDice; 

}
}

/**
 * This function will play a round using the rolldice() and calculateScore() funcitons. 
 */
function playRound() 

{
    if (currentRound < maxRounds) 
        {

        const userDice = rollDice();
       
        const computerDice = rollDice();

        /// Local variables used to calculate the score and eventually detirmine the winner

        const userRoundScore = calculateScore(userDice);
        
        const computerRoundScore = calculateScore(computerDice);

       
        userScore += userRoundScore;
        computerScore += computerRoundScore;

        // this will increment the current round variable until we hit max rounds 
        currentRound++;

        ///This function is define below and will output the result of playRound() fuction 

        updateUI(userDice, computerDice, userRoundScore, computerRoundScore);


        if (currentRound === maxRounds) 
            
            {
            declareWinner(); // Determine and display the winner
        }
    }
}/**
 * This funciton will take the updated score variables values and output it to the user. 
 * @param {*} userDice  
 * @param {*} computerDice 
 * @param {*} userRoundScore  User Score. 
 * @param {*} computerRoundScore  Computer Score
 */


/**Final Assignment Requirements. 
 * The game should provide a text or graphical output showing the following:
 * The current rolled dice values for the player and the computer.
 * The score for this round for the player and the computer.
 * The accumulated total score for the player and computer
 */

function updateUI(userDice, computerDice, userRoundScore, computerRoundScore) 

{
    ///this block of code, will bruild the string for the final result. 
    $('#user-dice').html(`<img src="images/usericon.png" width="20px"> Your Score is: ${userDice[0]}, ${userDice[1]}`);
   
    $('#computer-dice').html(`<img src="images/computericon.png" width="20px"> And the Computer's Score is: ${computerDice[0]}, ${computerDice[1]}`);
   
    $('#user-score').html(`<img src="images/userscore.png" width="20px"> Your Score For This Round: ${userRoundScore}`);
   
    $('#computer-score').html(`<img src="images/computerscore.png" width="20px"> And the Computer's Score This Round: ${computerRoundScore}`);
    
    $('#total-score').html(`<img src="images/final.png" width="20px"> Your Total: ${userScore} | Computer Total is: ${computerScore}`);
}

/**
 * This function creates a message variable and will output it to declare the inner. 
 */
function declareWinner() 
{
    let message;

    if (userScore > computerScore) 
        {
         message = "You win!";
    } else if (userScore < computerScore) 
        {
        message = "The Computer wins!";
    } else 
    {
          message = "The game was a tie!";
    }
    $('#winner-message').text(message);
}


/**
 * This function will be used in a button to reset the game. 
 */
function resetGame() {
   
    userScore = 0;

    computerScore = 0;

    currentRound = 0;


    $('#user-dice, #computer-dice, #user-score, #computer-score, #total-score, #winner-message').text('');
}

/**
 * Code block below is for the two buttons in the game. 
 */

/** Assignment Requirements:
 * The game should provide a button that will do the following: roll a pair dice for the player and a
 * nother pair of dice for the computer, calculate the score for each of the player’s 
 * then update the browser display to reflect the state of the game.
 */
$(document).ready(function () {
    $('#roll-dice-btn').on('click', playRound); // Roll dice button
    $('#reset-game-btn').on('click', resetGame); // Reset button
});
