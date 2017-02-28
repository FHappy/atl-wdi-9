// var gameBoard = document.getElementById('gameBoard');
var player1 = "X";
var player2 = "O";
var game = {};
var gameBoard = [[], [], []];
game.currentTurn = player1;
game.winner = false;

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    var position = 'pos(' + i + ',' + j + ')';
    gameBoard[i][j] = document.getElementById(position);
    gameBoard[i][j].setAttribute('player', "");
    gameBoard[i][j].addEventListener('click', move);
  }
}

var newGameButton = document.getElementsByTagName('button')[0];
newGameButton.addEventListener('click', startNewGame);

function move() {
  if (game.winner === false) {
    if (this.getAttribute('player') === "") {
      this.setAttribute('player', game.currentTurn);
      if (this.getAttribute('player') === player1) {
        this.innerHTML = '<img src="images/X.png">';
      } else {
        this.innerHTML = '<img src="images/O.png">';
      }
      checkWinningCombinations(game.currentTurn);
      if (boardIsFull()) {
        alert("No one won!");
      } else {
        setNextTurn();
      }
    }
  }
}


function setNextTurn() {
  if (game.currentTurn === player1) {
    game.currentTurn = player2;
    document.getElementsByTagName('h1')[1].innerHTML = "Player 2's turn!";
  } else {
    game.currentTurn = player1;
    document.getElementsByTagName('h1')[1].innerHTML = "Player 1's turn!";
  }
}


function boardIsFull() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (gameBoard[i][j].getAttribute('player') === "") {
        return false;
      }
    }
  }

  return true;
}


function isWinningCombination(combination, player) {
  for (var i = 0; i < 3; i++) {
    if (combination[i].getAttribute('player') !== player) {
      return false;
    }
  }

  game.winner = true;
  return true;
}


function checkWinningCombinations(player) {
  var rows = [gameBoard[0], gameBoard[1], gameBoard[2]];
  for (var i = 0; i < 3; i++) {
    if (isWinningCombination(rows[i], player)) {
      alert("Game over! " + player + " won!");
    }
  }

  var columns = [[], [], []];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        columns[i].push(gameBoard[j][i]);
      }
    }

  for (var i = 0; i < 3; i++) {
    if (isWinningCombination(columns[i], player)) {
      alert("Game over! " + player + " won!");
    }
  }

  var firstDiagonal = [];
  for (var i = 0; i < 3; i++) {
    firstDiagonal.push(gameBoard[i][i]);
  }
  if (isWinningCombination(firstDiagonal, player)) {
    alert("Game over! " + player + " won!");
  }

  var secondDiagonal = [];
    for (var i = 0; i < 3; i++) {
      secondDiagonal.push(gameBoard[i][2-i]);
    }
  if (isWinningCombination(secondDiagonal, player)) {
    alert("Game over! " + player + " won!");
  }
}


function startNewGame() {
  game.winner = false;
  game.currentTurn = player2;
  setNextTurn();
  for (x of gameBoard) {
    for (y of x) {
      y.setAttribute('player', "");
      y.innerHTML = "<h2>Click Me</h2>";
    }
  }
}
