//business logic
function dieroll (){
  var dieroll = 1 + Math.floor(Math.random() * 6);
  return dieroll;
}

$(document).ready(function(){
  var player1turn = true;
  var player1score = 0;
  var player2score = 0;
  var unheldscore = 0;
  var currentroll = dieroll();
  if (currentroll === 1) {
    player1turn = ! player1turn;
    unheldscore = 0;
  } else {
    unheldscore += currentroll;
  }

  $("button#roll").click(function(event) {
    event.preventDefault();
    var currentroll = dieroll();
    if (currentroll === 1) {
      player1turn = ! player1turn;
      unheldscore = 0;
    } else {
      unheldscore += currentroll;
    }
    console.log(player1turn, unheldscore);
  });

  $("button#hold").click(function(event) {
    event.preventDefault();
    if (player1turn) {
      player1score += unheldscore;
      if (player1score >= 100) {
        alert ("Player 1 wins!");
      }
      player1turn = false;
    } else {
      player2score += unheldscore;
      if (player2score >= 100) {
        alert ("Player 2 wins!");
      }
      player1turn = true;
    };
  });
});
