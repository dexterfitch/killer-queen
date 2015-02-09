describe('queenAttack', function() {
  it("is false if the coordinates are not horizontally vertically or diagonally in line with each other", function() {
    expect(queenAttack([1, 1], [2, 4])).to.equal(false);
  });

  it("is true if the attack piece is horizontal from the queen piece", function() {
    expect(queenAttack([1, 1], [1, 4])).to.equal(true);
  });

  it("is true if the attack piece is vertical from the queen piece", function() {
    expect(queenAttack([3, 5], [7, 5])).to.equal(true);
  });

  it("is true if the attack piece is lower-left-diagional from the queen piece", function() {
    expect(queenAttack([1, 7], [4, 4])).to.equal(true);
  });

  it("is true if the attack piece is upper-right-diagional from the queen piece", function() {
    expect(queenAttack([6, 1], [2, 5])).to.equal(true);
  });

  it("is true if the attack piece is upper-left-diagional from the queen piece", function() {
    expect(queenAttack([6, 3], [5, 2])).to.equal(true);
  });

  it("is true if the attack piece is lower-right-diagional from the queen piece", function() {
    expect(queenAttack([5, 4], [7, 6])).to.equal(true);
  });

  it("is false if any specified coordinate is less than one", function() {
    expect(queenAttack([0, 7], [2, 5])).to.equal(false);
  });

  it("is false if any specified coordinate is greater than 8", function() {
    expect(queenAttack([3, 4], [8, 9])).to.equal(false);
  });

  it("is false if any specified coordinate is NaN", function() {
    expect(queenAttack([ , 4], [8, 4])).to.equal(false);
  });

  it("is false if the specified coordinates are the same for each position", function() {
    expect(queenAttack([8, 8], [8, 8])).to.equal(false);
  });

});
