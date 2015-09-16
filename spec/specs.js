describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    var testPlayer = new Player("O");
    expect(testPlayer.mark()).to.equal("X", "O");
  });
});

describe("Space", function() {
  it("returns the x_coordinate space", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.x_position()).to.equal(1);
  });

  // it("returns the y_coordinate space", function() {
  //   var testSpace = new Space(1,3);
  //   expect(testSpace.markby()).to.equal(3);
  // });
});
