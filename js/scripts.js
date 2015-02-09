var queenAttack = function(queenPosition, attackPosition) {
  var qpx = queenPosition[0];
  var qpy = queenPosition[1];
  var apx = attackPosition[0];
  var apy = attackPosition[1];

  if ((qpx < 1) || (qpy < 1) || (apx < 1) || (apy < 1) || (qpx > 8) || (qpy > 8) || (apx > 8) || (apy > 8)) {
    return false;
  } else if ((qpx === apx) || (qpy === apy) || ((qpx - apx) + (qpy - apy) === 0) || ((qpx - apx) - (qpy - apy) === 0)) {
    return true;
  } else {
    return false;
  }
};
