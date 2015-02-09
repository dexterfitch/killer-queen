describe('queenAttack', function() {
  it("is false if the coordinates are not horizontally vertically or diagonally in line with each other", function() {
    expect(queenAttack([1, 1], [2,4])).to.equal(false);
  });

  it("is true if the attack piece is horizontal from the queen piece", function() {
    expect(queenAttack([1, 1], [1,4])).to.equal(true);
  });

});
