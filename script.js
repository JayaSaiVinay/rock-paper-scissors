let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

const weapons = ['Rock', 'Paper', 'Scissor'];

// Computer Weapon

function getComputerWeapon()
{
  const randomNumber = Math.floor(Math.random() * 3);
  return weapons[randomNumber];
}



// Player Weapon

function win(playerWeapon, computerWeapon)
{
  playerScore++;
  result_p.innerHTML = `${playerWeapon} beats ${computerWeapon}, You Won !!`; 
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
}

function lose(playerWeapon, computerWeapon)
{
  computerScore++;
  result_p.innerHTML = `${computerWeapon} beats ${playerWeapon}, You Lost !!`;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
}

function draw(playerWeapon, computerWeapon)
{
  result_p.innerHTML = `${computerWeapon} VS ${playerWeapon} is a TIE!!`;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
}

function game(playerWeapon)
{
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








