var lessThanZero = function(coordinate) {
  if (coordinate < 1) {
    return true;
  } else {
    return false;
  }
};

var greaterThanEight = function(coordinate) {
  if (coordinate > 8) {
    return true;
  } else {
    return false;
  }
};

var queenAttack = function(queenPosition, attackPosition) {
  var queenPositionX = queenPosition[0];
  var queenPositionY = queenPosition[1];
  var attackPositionX = attackPosition[0];
  var attackPositionY = attackPosition[1];
  var allCoordinates = [queenPositionX, queenPositionY, attackPositionX, attackPositionY]

  if ((allCoordinates.some(lessThanZero)) || (allCoordinates.some(greaterThanEight)) || (allCoordinates.some(isNaN))) {
    return false;
  } else if ((queenPositionX === attackPositionX) && (queenPositionY === attackPositionY)) {
    return false;
  } else if (queenPositionX === attackPositionX) {
    return true;
  } else if (queenPositionY === attackPositionY) {
    return true;
  } else if ((Math.abs(queenPositionX - attackPositionX)) - (Math.abs(queenPositionY - attackPositionY)) === 0) {
    return true;
  } else {
    return false;
  }
};

// ---------------------------------------------------------------------

$(document).ready(function() {

  $("form#queen-attack").submit(function(event) {
    var queenPositionX = parseInt($("input#queen-position-x").val());
    var queenPositionY = parseInt($("input#queen-position-y").val());
    var attackPositionX = parseInt($("input#attack-position-x").val());
    var attackPositionY = parseInt($("input#attack-position-y").val());
    var allCoordinates = [queenPositionX, queenPositionY, attackPositionX, attackPositionY]
    var queenCoordinates = [queenPositionX, queenPositionY];
    var attackCoordinates = [attackPositionX, attackPositionY];

    var result = queenAttack(queenCoordinates, attackCoordinates);

    $(".queen-coordinates").text(queenCoordinates);
    $(".attack-coordinates").text(attackCoordinates);

    if (allCoordinates.some(isNaN)) {
      $("#error").show();

    } else {

      if (!result) {
        $(".not").text("not");
      } else {
        $(".not").text("");
      };

      $("#result").show();
    }
    
    event.preventDefault();
  });
});
