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

var win = new Grid("","","","","","","","","");

Grid.prototype.winner = function(){
    if ((win.a1 === "O") && (win.b1 === "O") && (win.c1 === "O")) {
      alert("Player 2 is the winner!");
    } else if ((win.a1 === "O") && (win.a2 === "O") && (win.a3 === "O")){
      alert("Player 2 is the winner!");
    } else if ((win.a1 === "O") && (win.b2 === "O") && (win.c3 === "O")){
      alert("Player 2 is the winner!");
    } else if ((win.b1 === "O") && (win.b2 === "O") && (win.b3 === "O")){
      alert("Player 2 is the winner!");
    } else if ((win.c1 === "O") && (win.c2 === "O") && (win.c3 === "O")){
      alert("Player 2 is the winner!");
    } else if ((win.c1 === "O") && (win.b2 === "O") && (win.a3 === "O")){
      alert("Player 2 is the winner!");
    } else if ((win.a2 === "O") && (win.b2 === "O") && (win.c2 === "O")){
      alert("Player 2 is the winner!");
    } else if ((win.a3 === "O") && (win.b3 === "O") && (win.c3 === "O")){
      alert("Player 2 is the winner!");
    } else if ((win.a1 === "X") && (win.b1 === "X") && (win.c1 === "X")) {
      alert("Player 1 is the winner!");
    } else if ((win.a1 === "X") && (win.a2 === "X") && (win.a3 === "X")){
      alert("Player 1 is the winner!");
    } else if ((win.a1 === "X") && (win.b2 === "X") && (win.c3 === "X")){
      alert("Player 1 is the winner!");
    } else if ((win.b1 === "X") && (win.b2 === "X") && (win.b3 === "X")){
      alert("Player 1 is the winner!");
    } else if ((win.c1 === "X") && (win.c2 === "X") && (win.c3 === "X")){
      alert("Player 1 is the winner!");
    } else if ((win.c1 === "X") && (win.b2 === "X") && (win.a3 === "X")){
      alert("Player 1 is the winner!");
    } else if ((win.a2 === "X") && (win.b2 === "X") && (win.c2 === "X")){
      alert("Player 1 is the winner!");
    } else if ((win.a3 === "X") && (win.b3 === "X") && (win.c3 === "X")){
      alert("Player 1 is the winner!");
    } else if ((win.a1 !== "") && (win.a2 !== "") && (win.a3 !== "") && (win.b1 !== "") && (win.b2 !== "") && (win.b3 !== "") && (win.c1 !== "") && (win.c2 !== "") &&  (win.c3 !== ""  )) {
      alert("Cat's Game!")
    };
};

function Turn (character, clickCounter1){
  this.character = character;
  this.clickCounter1 = clickCounter1;
};



var player1 = new Turn("X", 0);
var player2 = new Turn("O", 1);



newGrid = ["A1","B1","C1","A2","B2","C2","A3","B3","C3"];


var computerChoice = function(){
  var nRandom = Math.floor(Math.random() * (newGrid.length)),
  mElement = newGrid[nRandom];
   $("#" + mElement + "").text("O")
};




var gameTypeToggle = function(gameType){
if(gameType === 2){
  var clicks = 1;
  Turn.prototype.clickCounter = function(){
    clicks += 1
      if  (clicks % 2 === 0) {
        return player1.character;
      } else if   (clicks % 2 !== 0){
        return player2.character;
      }
    }
  } else if (gameType === 1) {
    var clicks = 2;
    Turn.prototype.clickCounter = function(loc){
        if  (clicks % 2 === 0) {
          clicks += 2;
          $(loc).text("X");
          computerChoice();
        }
      }
    };
};
// }else if(gameType = onePLayer){
// function ComputerTurn (character){
//   this.character = character;
// }
//   var playerCpu1 = new ComputerTurn("X");
//   var Cpu = new ComputerTurn("O");
//
//   ComputerTurn.prototype.computerTurns = function(square){
//
//       if  (b2 === "") {
//         return win.b2 = Cpu;
//       }else if   (){
//             return ;
//         }
//     };
// }
//frontend

$(document).ready(function(){
  $("#a1").click(function(event){
    event.preventDefault();
    var result = player1.clickCounter("#A1");
    $("#A1").text(result);
    win.a1 = result;
    win.winner();
    $("#a1").unbind("click");
  });
  $("#b1").click(function(event){
    event.preventDefault();
    var result = player1.clickCounter("#B1");
    $("#B1").text(result);
    win.b1 = result;
    win.winner();
    $("#b1").unbind("click");
  });
  $("#c1").click(function(event){
    event.preventDefault();
    var result = player1.clickCounter("#C1");
    $("#C1").text(result);
    win.c1 = result;
    win.winner();
    $("#c1").unbind("click");
  });
  $("#a2").click(function(event){
    event.preventDefault();
    var result = player1.clickCounter("#A2");
    $("#A2").text(result);
    win.a2 = result;
    win.winner();
    $("#a2").unbind("click");
  });
  $("#b2").click(function(event){
    event.preventDefault();
    var result = player1.clickCounter("#B2");
    $("#B2").text(result);
    win.b2 = result;
    win.winner();
    $("#b2").unbind("click");
  });
  $("#c2").click(function(event){
    event.preventDefault();
    var result = player1.clickCounter("#C2");
    $("#C2").text(result);
    win.c2 = result;
    win.winner();
    $("#c2").unbind("click");
  });
  $("#a3").click(function(event){
    event.preventDefault();
    var result = player1.clickCounter("#A3");
    $("#A3").text(result);
    win.a3 = result;
    win.winner();
    $("#a3").unbind("click");
  });
  $("#b3").click(function(event){
    event.preventDefault();
    var result = player1.clickCounter("#B3");
    $("#B3").text(result);
    win.b3 = result;
    win.winner();
    $("#b3").unbind("click");
  });
  $("#c3").click(function(event){
    event.preventDefault();
    var result = player1.clickCounter("#C3");
    $("#C3").text(result);
    win.c3 = result;
    win.winner();
    $("#c3").unbind("click");
  });
  //one player Game
  $(".form").click(function(event){
    event.preventDefault();
    var gameType = parseInt($("input:radio[name=playerSelect]:checked").val());
    gameTypeToggle(gameType);
 });
});
