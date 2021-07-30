// players
let p1score = 0;
let p2score = 0;
let playerTurns = true;
// score DOM
const p1ScoreBoardDOM = document.getElementById('player1Scoreboard');
const p2ScoreBoardDOM = document.getElementById('player2Scoreboard');
// dice numberss DOM
const p1diceScore = document.getElementById('player1Dice');
const p2diceScore = document.getElementById('player2Dice');
// dice button DOM
const rollDices = document.getElementById('rollBtn');
const resetGame = document.getElementById('resetBtn');
// message DOM
const message = document.getElementById('message');

rollDices.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 7) + 1;

  if (playerTurns) {
    p1score += randomNumber;
    p1ScoreBoardDOM.textContent = p1score;
    p1diceScore.textContent = randomNumber;
    message.textContent = `Player 1 rolled ${p1diceScore.textContent}`;
    p1diceScore.classList.remove('active');
    p2diceScore.classList.add('active');
    message.textContent = 'Player 2 Turn';
  } else {
    p2score += randomNumber;
    p2diceScore.textContent = randomNumber;
    p2ScoreBoardDOM.textContent = p2score;
    message.textContent = `Player 2 rolled ${p2diceScore.textContent}`;
    p1diceScore.classList.add('active');
    p2diceScore.classList.remove('active');
    message.textContent = 'Player 1 Turn';
  }
  if (p1score >= 7) {
    message.textContent = 'Player 1 has won!!';
    showDisplayButton();
    document.getElementById('player1win').style.display = 'block';
    document.getElementById('allPlayers').style.display = 'none';
  } else if (p2score >= 7) {
    message.textContent = 'Player 2 has won!!';
    showDisplayButton();
    document.getElementById('player2win').style.display = 'block';
    document.getElementById('allPlayers').style.display = 'none';
  }
  playerTurns = !playerTurns;
});

function showDisplayButton() {
  rollDices.style.display = 'none';
  resetGame.style.display = 'block';
}

resetGame.addEventListener('click', function () {
  message.textContent = 'Player 1 Turn';
  p1diceScore.textContent = '-';
  p2diceScore.textContent = '-';
  p1score = 0;
  p2score = 0;
  playerTurns = true;
  p1ScoreBoardDOM.textContent = '0';
  p2ScoreBoardDOM.textContent = '0';
  rollDices.style.display = 'block';
  resetGame.style.display = 'none';
  p1diceScore.classList.add('active');
  p2diceScore.classList.remove('active');
  document.getElementById('player1win').style.display = 'none';
  document.getElementById('player2win').style.display = 'none';
  document.getElementById('allPlayers').style.display = 'flex';
});
