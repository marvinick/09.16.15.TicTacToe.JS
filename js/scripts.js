function PlayerX(mark_x) {
  this.mark_x = mark_x;
};

PlayerX.prototype.mark = function() {
  return this.mark_x;
};

function PlayerO(mark_o) {
  this.mark_o = mark_o;
};

PlayerO.prototype.mark = function() {
  return this.mark_o;
};

function GameBoard() {
  this.spaces = [0, 1, 2, 3, 4, 5, 6, 7, 8];
};

GameBoard.prototype.mark = function(xo, position) {
  this.spaces.splice(position, 1, xo);
  return this.spaces;
};


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
//   var currentthis.spaces = gameBoard.mark("X", 1);
// });
