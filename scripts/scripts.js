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

  $("button#roll").click(function(event) {
    event.preventDefault();
    var currentroll = dieroll();
    if (currentroll === 1) {
      if(player1turn) {
        console.log("You rolled a 1 --- Switch to Player 2!");
      } else {
        console.log("You rolled a 1 --- Switch to Player 1!");
      };
      player1turn = ! player1turn;
      unheldscore = 0;
    } else {
      unheldscore += currentroll;
      if(player1turn) {
        console.log("Score is ",player1score," to ",player2score," --- Player 1 so far this turn has: ", unheldscore);
      } else {
        console.log("Score is ",player1score," to ",player2score," --- Player 2 so far this turn has: ", unheldscore);
      };
    };
  });

  $("button#hold").click(function(event) {
    event.preventDefault();
    if (player1turn) {
      player1score += unheldscore;
      unheldscore = 0;
      if (player1score >= 100) {
        alert ("Player 1 wins!");
      }
      player1turn = false;
    } else {
      player2score += unheldscore;
      unheldscore = 0;
      if (player2score >= 100) {
        alert ("Player 2 wins!");
      }
      player1turn = true;
    };
    if(player1turn) {
      console.log("Score is ",player1score," to ",player2score," --- Switch to Player 1!");
    } else {
      console.log("Score is ",player1score," to ",player2score," --- Switch to Player 2!");
    };
  });
});
