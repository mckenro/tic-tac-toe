//backend
function Grid (a1, b1, c1, a2, b2, c2, a3, b3, c3) {
  this.a1 = a1;
  this.b1 = b1;
  this.c1 = c1;
  this.a2 = a2;
  this.b2 = b2;
  this.c2 = c2;
  this.a3 = a3;
  this.b3 = b3;
  this.c3 = c3;
};

function Tally () {
  this.play1 = 0;
  this.play2 = 0;
}

var win = new Grid("","","","","","","","","");
var resetGrid = new Grid("","","","","","","","","");

var playerGameTally = new Tally();

Grid.prototype.reset = function(){
  $("#A1, #B1, #C1, #A2, #B2, #C2, #A3, #B3, #C3").replaceWith("","","","","","","","","");
  return (this.a1 = "", this.b1 = "", this.c1 = "", this.a2 = "", this.b2 = "", this.c2 = "", this.a3 = "", this.b3 = "", this.c3 = "");
};

Grid.prototype.winner = function(){
    if ((win.a1 === "O") && (win.b1 === "O") && (win.c1 === "O")) {
      alert("Player 2 is the winner!");
      win.reset();
      console.log(win);
      return playerGameTally.play2 = playerGameTally.play2 + 1;
    } else if ((win.a1 === "O") && (win.a2 === "O") && (win.a3 === "O")){
      alert("Player 2 is the winner!");
      win.reset();
      return playerGameTally.play2 = playerGameTally.play2 + 1;
    } else if ((win.a1 === "O") && (win.b2 === "O") && (win.c3 === "O")){
      alert("Player 2 is the winner!");
      win.reset();
      return playerGameTally.play2 = playerGameTally.play2 + 1;
    } else if ((win.b1 === "O") && (win.b2 === "O") && (win.b3 === "O")){
      alert("Player 2 is the winner!");
      win.reset();
      return playerGameTally.play2 = playerGameTally.play2 + 1;
    } else if ((win.c1 === "O") && (win.c2 === "O") && (win.c3 === "O")){
      alert("Player 2 is the winner!");
      win.reset();
      return playerGameTally.play2 = playerGameTally.play2 + 1;
    } else if ((win.c1 === "O") && (win.b2 === "O") && (win.a3 === "O")){
      alert("Player 2 is the winner!");
      win.reset();
      return playerGameTally.play2 = playerGameTally.play2 + 1;
    } else if ((win.a2 === "O") && (win.b2 === "O") && (win.c2 === "O")){
      alert("Player 2 is the winner!");
      win.reset();
      return playerGameTally.play2 = playerGameTally.play2 + 1;
    } else if ((win.a3 === "O") && (win.b3 === "O") && (win.c3 === "O")){
      alert("Player 2 is the winner!");
      win.reset();
      return playerGameTally.play2 = playerGameTally.play2 + 1;
    } else if ((win.a1 === "X") && (win.b1 === "X") && (win.c1 === "X")) {
      alert("Player 1 is the winner!");
      win.reset();
      return playerGameTally.play1 = playerGameTally.play1 + 1;
    } else if ((win.a1 === "X") && (win.a2 === "X") && (win.a3 === "X")){
      alert("Player 1 is the winner!");
      win.reset();
      return playerGameTally.play1 = playerGameTally.play1 + 1;
    } else if ((win.a1 === "X") && (win.b2 === "X") && (win.c3 === "X")){
      alert("Player 1 is the winner!");
      win.reset();
      return playerGameTally.play1 = playerGameTally.play1 + 1;
    } else if ((win.b1 === "X") && (win.b2 === "X") && (win.b3 === "X")){
      alert("Player 1 is the winner!");
      win.reset();
      return playerGameTally.play1 = playerGameTally.play1 + 1;
    } else if ((win.c1 === "X") && (win.c2 === "X") && (win.c3 === "X")){
      alert("Player 1 is the winner!");
      win.reset();
      return playerGameTally.play1 = playerGameTally.play1 + 1;
    } else if ((win.c1 === "X") && (win.b2 === "X") && (win.a3 === "X")){
      alert("Player 1 is the winner!");
      win.reset();
      return playerGameTally.play1 = playerGameTally.play1 + 1;
    } else if ((win.a2 === "X") && (win.b2 === "X") && (win.c2 === "X")){
      alert("Player 1 is the winner!");
      win.reset();
      return playerGameTally.play1 = playerGameTally.play1 + 1;
    } else if ((win.a3 === "X") && (win.b3 === "X") && (win.c3 === "X")){
      win.reset();
      console.log(win);
      alert("Player 1 is the winner!");
      return playerGameTally.play1 = playerGameTally.play1 + 1;
    } else if ((win.a1 !== "") && (win.a2 !== "") && (win.a3 !== "") && (win.b1 !== "") && (win.b2 !== "") && (win.b3 !== "") && (win.c1 !== "") && (win.c2 !== "") &&  (win.c3 !== ""  )) {
      alert("Cat's Game!")
      win.reset();
    };
};

function Turn (character, clickCounter1){
  this.character = character;
  this.clickCounter1 = clickCounter1;
};

var player1 = new Turn("X", 0);
var player2 = new Turn("O", 1);

var clicks = 1;
Turn.prototype.clickCounter = function(){
  clicks += 1
    if  (clicks % 2 === 0) {
      return player1.character;
    } else if   (clicks % 2 !== 0){
          return player2.character;
      }
  };

//frontend

$(document).ready(function(){
  $("#a1").click(function(event){
    event.preventDefault();
    $("#A1").text(player1.clickCounter());
    console.log(player1.clickCounter());
    win.a1 = player1.clickCounter();
    win.winner();
    $("#play1Tally").text(" " + playerGameTally.play1);
    $("#play2Tally").text(" " + playerGameTally.play2);
  });
  $("#b1").click(function(event){
    event.preventDefault();
    $("#B1").text(player1.clickCounter());
    console.log(player1.clickCounter());
    win.b1 = player1.clickCounter();
    win.winner();
    $("#play1Tally").text(" " + playerGameTally.play1);
    $("#play2Tally").text(" " + playerGameTally.play2);
  });
  $("#c1").click(function(event){
    event.preventDefault();
    $("#C1").text(player1.clickCounter());
    console.log(player1.clickCounter());
    win.c1 = player1.clickCounter();
    win.winner();
    $("#play1Tally").text(" " + playerGameTally.play1);
    $("#play2Tally").text(" " + playerGameTally.play2);
  });
  $("#a2").click(function(event){
    event.preventDefault();
    $("#A2").text(player1.clickCounter());
    console.log(player1.clickCounter());
    win.a2 = player1.clickCounter();
    win.winner();
    $("#play1Tally").text(" " + playerGameTally.play1);
    $("#play2Tally").text(" " + playerGameTally.play2);
  });
  $("#b2").click(function(event){
    event.preventDefault();
    $("#B2").text(player1.clickCounter());
    console.log(player1.clickCounter());
    win.b2 = player1.clickCounter();
    win.winner();
    $("#play1Tally").text(" " + playerGameTally.play1);
    $("#play2Tally").text(" " + playerGameTally.play2);
  });
  $("#c2").click(function(event){
    event.preventDefault();
    $("#C2").text(player1.clickCounter());
    console.log(player1.clickCounter());
    win.c2 = player1.clickCounter();
    win.winner();
    $("#play1Tally").text(" " + playerGameTally.play1);
    $("#play2Tally").text(" " + playerGameTally.play2);
  });
  $("#a3").click(function(event){
    event.preventDefault();
    $("#A3").text(player1.clickCounter());
    console.log(player1.clickCounter());
    win.a3 = player1.clickCounter();
    win.winner();
    $("#play1Tally").text(" " + playerGameTally.play1);
    $("#play2Tally").text(" " + playerGameTally.play2);
  });
  $("#b3").click(function(event){
    event.preventDefault();
    $("#B3").text(player1.clickCounter());
    console.log(player1.clickCounter());
    win.b3 = player1.clickCounter();
    win.winner();
    $("#play1Tally").text(" " + playerGameTally.play1);
    $("#play2Tally").text(" " + playerGameTally.play2);
  });
  $("#c3").click(function(event){
    event.preventDefault();
    $("#C3").text(player1.clickCounter());
    console.log(player1.clickCounter());
    win.c3 = player1.clickCounter();
    win.winner();
    $("#play1Tally").text(" " + playerGameTally.play1);
    $("#play2Tally").text(" " + playerGameTally.play2);
  });

});
