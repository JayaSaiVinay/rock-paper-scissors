alert('To Play Rock-Paper-Scissor go to console!!\nShortcut for console: Control + Shift + J(For Windows) !!!')
alert('This game has 5 rounds, one who scores more will win!')

// Getting Choice from computer

function getComputerChoice(max){
  return parseInt(Math.floor(Math.random() * max));
}


// Function for single round of ROCK-PAPER-SCISSORS

let userWinCount = 0;
let computerWinCount = 0;
let resultAnnouncement;
let userChoice;
let computerChoice;

function playGround(userChoice, computerChoice){

  // Computer Choice

  let a = getComputerChoice(3);

  if (a === 0)
  {
    computerChoice = 'Rock';
  }
  else if (a == 1){
    computerChoice = 'Paper';
  }
  else 
  {
    computerChoice = 'Scissor';
  }

  // User Choice

  userChoice = prompt('Rock or Paper or Scissor ?');
  userChoice = userChoice.toUpperCase();

  // Conditions

  if (userChoice === 'ROCK' && computerChoice === 'Rock'){
    userWinCount ++;
    computerWinCount ++;
    return resultAnnouncement = 'It is a tie! Both have chosen Rock';
  }
  else if (userChoice === 'ROCK' && computerChoice === 'Paper'){
    computerWinCount ++;
    return resultAnnouncement = 'You have lost! Paper beats Rock';
  }
  else if (userChoice === 'ROCK' && computerChoice === 'Scissor'){
    userWinCount ++;
    return resultAnnouncement = 'You have Won! Rock beats Scissor';
  }
  else if (userChoice === 'PAPER' && computerChoice === 'Rock'){
    userWinCount ++;
    return resultAnnouncement = 'You have Won! Paper beats Rock';
  }
  else if (userChoice === 'PAPER' && computerChoice === 'Paper'){
    userWinCount ++;
    computerWinCount ++;
    return resultAnnouncement = 'It is a tie! Both have chosen Paper';
  }
  else if (userChoice === 'PAPER' && computerChoice === 'Scissor'){
    computerWinCount ++;
    return resultAnnouncement = 'You have lost! Scissor beats Paper';
  }
  else if (userChoice === 'SCISSOR' && computerChoice === 'Rock'){
    computerWinCount ++;
    return resultAnnouncement = 'You have lost! Rock beats Scissor';
  }
  else if (userChoice === 'SCISSOR' && computerChoice === 'Paper'){
    userWinCount ++;
    return resultAnnouncement = 'You have Won! Scissor beats Paper';
  }
  else if (userChoice === 'SCISSOR' && computerChoice === 'Scissor'){
    computerWinCount ++;
    userWinCount ++;
    return resultAnnouncement = 'It is a tie! Both have chosen Scissor';
  }
  else{
    computerWinCount ++;
    userWinCount ++;
    return resultAnnouncement = 'You have entered invalid word so it is a tie!';
  }

}

// To repeat the playGround for five rounds

function game()
{
  for (let i = 0; i < 5; i ++)
  {
    playGround(userChoice, computerChoice);
    console.log(resultAnnouncement)
  }

  console.log(`Player Points: ${userWinCount}`)
  console.log(`Computer Points: ${computerWinCount}`)

  if(userWinCount > computerWinCount)
  {
    console.log('You have Won');
  }
  else if(userWinCount < computerWinCount)
  {
    console.log('You have Lost')
  }
  else
  {
    console.log('It is a tie')
  }
}

game();

alert('To Play again refresh the page')




