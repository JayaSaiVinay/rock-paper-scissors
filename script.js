let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const final_result_h1 = document.querySelector(".final-result > h1")

const weapons = ['Rock', 'Paper', 'Scissor'];

// Computer Weapon

function getComputerWeapon()
{
  const randomNumber = Math.floor(Math.random() * 3);
  return weapons[randomNumber];
}

function win(playerWeapon, computerWeapon)
{
  playerScore++;
  result_p.innerHTML = `${playerWeapon} beats ${computerWeapon}, You Won !!`; 
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  if (playerScore === 5)
  {
    final_result_h1.innerHTML = `You have WON the game!!`;
  }
}

function lose(playerWeapon, computerWeapon)
{
  computerScore++;
  result_p.innerHTML = `${computerWeapon} beats ${playerWeapon}, You Lost !!`;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  if (computerScore === 5)
  {
    final_result_h1.innerHTML = `You have LOST the game!!`;
  }
}

function draw(playerWeapon, computerWeapon)
{
  result_p.innerHTML = `${computerWeapon} VS ${playerWeapon} is a TIE!!`;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
}

function playAgain()
{
  alert('Refresh to play again')
}

// Game 

function game(playerWeapon)
{
  if(playerScore === 5 || computerScore === 5)
  {
    return playAgain();
  }

  const computerWeapon = getComputerWeapon();
  switch (playerWeapon + computerWeapon)
  {
    case "RockScissor":
    case "PaperRock":
    case "ScissorPaper":
      win(playerWeapon, computerWeapon);
      break;
    case "RockPaper":
    case "PaperScissor":
    case "ScissorRock":
      lose(playerWeapon, computerWeapon);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorScissor":
      draw(playerWeapon, computerWeapon);
      break;
  }
  


}
// Getting Player Weapon

function main()
{
  rock_div.addEventListener('click', function()
  {
    game('Rock');
  });

  paper_div.addEventListener('click', function()
  {
    game('Paper');
  });

  scissor_div.addEventListener('click', function()
  {
    game('Scissor');
  });
}
main();









