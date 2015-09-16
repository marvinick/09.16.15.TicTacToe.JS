describe('PlayerX', function() {
  it("returns the player's mark", function() {
    var testPlayerX = new PlayerX(3);
    expect(testPlayerX.mark()).to.equal(3);
  });
});

describe("GameBoard", function() {
  it("returns X for the 3rd position in the array", function() {
    var testGameBoard = new GameBoard();
    var currentSpaces = testGameBoard.mark("X", 1);
    expect(currentSpaces).to.eql([0, "X", 2, 3, 4, 5, 6, 7, 8]);
  });
  it("returns a win if player picks 3 squares in a row", function() {
    var testGameBoard = new GameBoard();
    var currentSpace1 = testGameBoard.mark("X", 0);
    var currentSpace2 = testGameBoard.mark("X", 4);
    var currentSpace3 = testGameBoard.mark("X", 8);
    var winScenario = testGameBoard.win(currentSpace3);
    expect(winScenario).to.equal("Player X wins!");
  });

});
