//initiate player
var Player = function(symbol) {
  this.symbol = symbol;
}

//set gameboard with 9 index positions
function GameBoard() {
  this.spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
};

//specify a position and replace with a mark
GameBoard.prototype.mark = function(xo, position) {
  this.spaces.splice(position, 1, xo);
  return this.spaces;
};

//winning scenario
GameBoard.prototype.win = function() {
if (((this.spaces[0] == "X") && (this.spaces[1] == "X") && (this.spaces[2] == "X")) ||
    ((this.spaces[3] == "X") && (this.spaces[4] == "X") && (this.spaces[5] == "X")) ||
    ((this.spaces[6] == "X") && (this.spaces[7] == "X") && (this.spaces[8] == "X")) ||
    ((this.spaces[0] == "X") && (this.spaces[3] == "X") && (this.spaces[6] == "X")) ||
    ((this.spaces[1] == "X") && (this.spaces[4] == "X") && (this.spaces[7] == "X")) ||
    ((this.spaces[2] == "X") && (this.spaces[5] == "X") && (this.spaces[8] == "X")) ||
    ((this.spaces[0] == "X") && (this.spaces[4] == "X") && (this.spaces[8] == "X")) ||
    ((this.spaces[2] == "X") && (this.spaces[4] == "X") && (this.spaces[6] == "X")));

    return "Player X wins!"

if (((this.spaces[0] == "O") && (this.spaces[1] == "O") && (this.spaces[2] == "O")) ||
    ((this.spaces[3] == "O") && (this.spaces[4] == "O") && (this.spaces[5] == "O")) ||
    ((this.spaces[6] == "O") && (this.spaces[7] == "O") && (this.spaces[8] == "O")) ||
    ((this.spaces[0] == "O") && (this.spaces[3] == "O") && (this.spaces[6] == "O")) ||
    ((this.spaces[1] == "O") && (this.spaces[4] == "O") && (this.spaces[7] == "O")) ||
    ((this.spaces[2] == "O") && (this.spaces[5] == "O") && (this.spaces[8] == "O")) ||
    ((this.spaces[0] == "O") && (this.spaces[4] == "O") && (this.spaces[8] == "O")) ||
    ((this.spaces[2] == "O") && (this.spaces[4] == "O") && (this.spaces[6] == "O")));

    return "Player O wins!"
};

// $(document).ready(function(){
//   var gameBoard = new GameBoard();
//
//   var playerX = new Player("X");
//   var playerO = new Player("O");
//
//   gameBoard.mark("X", 1);
// });
