function Player(x, o) {
  this.x = "X";
  this.o = "O";
};

Player.prototype.mark = function() {
  return this.x;
  return this.o;
};

function Space(x_coordinate, y_coordinate) {
  this.x_coordinates = [1,2,3];
  this.y_coordinates = [1,2,3];
};

Space.prototype.x_position = function() {
  for(var i = 0; i < this.x_coordinates.length; i++) {
    if(this.x_coordinates[i] == this.x_coordinate) {
      return this.x_coordinate;
    };
  };
};

Space.prototype.markby = function() {

  return this.y_coordinate;
};
