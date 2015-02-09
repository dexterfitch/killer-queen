var lessThanZero = function (coordinate) {
  if (coordinate < 1) {
    return true;
  } else {
    return false;
  }
};

var greaterThanEight = function (coordinate) {
  if (coordinate > 8) {
    return true;
  } else {
    return false;
  }
};

var queenAttack = function(queenPosition, attackPosition) {
  var queenPositionX = queenPosition[0];
  var queenPositionY = queenPosition[1];
  var attackPostionX = attackPosition[0];
  var attackPostionY = attackPosition[1];
  var allCoordinates = [queenPositionX, queenPositionY, attackPostionX, attackPostionY]

  if ((allCoordinates.some(lessThanZero)) || (allCoordinates.some(greaterThanEight))) {
    return false;
  } else if (queenPositionX === attackPostionX) {
    return true;
  } else if (queenPositionY === attackPostionY) {
    return true;
  } else if ((Math.abs(queenPositionX - attackPostionX)) - (Math.abs(queenPositionY - attackPostionY)) === 0) {
    return true;
  } else {
    return false;
  }
};
