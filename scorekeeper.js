// //define score array
// var scores = [];

// //get user input of score & define variable for most recent score
// var input = prompt("What was your score?")
// while(input !== "done"){
// 	var input = prompt("What was your score?")
// 	scores.push(input);
// 	console.log(scores);
// }


// //add score to existing array
// function sumArray(arr){
// 	var total = 0
// 	arr.forEach(function(element){
// 	//+- adds a value
// 		total += element;
// 	});
// 	//use return so this can be calculated in the next loop iteration
// 	return(total);
// };

// sumArray([scores]);

//Declare button and score variables
var addp1 = document.querySelector("#p1");
var addp2 = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("#winningScore");
var winningScoreDisplay = document.querySelector("p span");
var gameOver = false;
var p1Name = document.querySelector("#p1Name");
var p2Name = document.querySelector("#p2Name");
var p1NameDisplay = document.querySelector("#p1NameDisplay");
var p2NameDisplay = document.querySelector("#p2NameDisplay");
var p1RoundScore = document.querySelector("#p1RoundScore");
var p2RoundScore = document.querySelector("#p2RoundScore");
var subp1 = document.querySelector("#delp1");
var subp2 = document.querySelector("#delp2");
var p1label = document.querySelector("#p1label");
var p2label = document.querySelector("#p2label");
var roundScores = document.querySelectorAll(".roundScore")
var winningScore = 150;

//Upon entering player names in the input field, update the name displays
p1Name.addEventListener("change",function(){
	p1NameDisplay.textContent = this.value;
	p1label.textContent = this.value;

})

p2Name.addEventListener("change",function(){
	p2NameDisplay.textContent = this.value;
	p2label.textContent = this.value;
})


//Upon clicking on P1's add, add to the score
addp1.addEventListener("click",function(){	
  if(!gameOver){
  	var newScore = p1Score+Number(p1RoundScore.value);
  	p1Score = newScore;
  if(p1Score >= winningScore){
  	//change winner's score to green
  	p1Display.classList.add("winner");
  	//set gameOver as true
  	gameOver = true;
 	}
 	//display p1's score
  	p1Display.textContent = p1Score;
   }
})

//Upon clicking on P2's add, add to the score
addp2.addEventListener("click",function(){
	if(!gameOver){
  		var newScore = p2Score+Number(p2RoundScore.value);
  		p2Score = newScore;
  	if(p2Score >= winningScore){
  		p2Display.classList.add("winner")
  		gameOver = true;
  	}
  p2Display.textContent = p2Score;
}
})

//Upon clicking on subtract, delete from p1's score
subp1.addEventListener("click",function(){	
  if(!gameOver){
  	var newScore = p1Score-Number(p1RoundScore.value);
  	p1Score = newScore;
  if(p1Score >= winningScore){
  	//change winner's score to green
  	p1Display.classList.add("winner");
  	//set gameOver as true
  	gameOver = true;
 	}
 	//display p1's score
  	p1Display.textContent = p1Score;
   }
})

//Upon clicking on subtract, delete from p2's score
subp2.addEventListener("click",function(){
	if(!gameOver){
  		var newScore = p2Score-Number(p2RoundScore.value);
  		p2Score = newScore;
  	if(p2Score >= winningScore){
  		p2Display.classList.add("winner")
  		gameOver = true;
  	}
  p2Display.textContent = p2Score;
}
})

//Declare reset function
function resetStuff(){
  p1Score = 0;
  p1Display.textContent = p1Score;
  p2Score = 0;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  p1Name = "Player 1";
  p2Name = "Player 2";
  p1NameDisplay.textContent = p1Name;
  p2NameDisplay.textContent = p2Name;
  p1label.textContent = p1Name;
  p2label.textContent = p2Name;
  roundScores = "";
  gameOver = false;
};

//Upon clicking Reset, run reset function
resetButton.addEventListener("click",function(){
  resetStuff();
});

//Update "Playing to" display text and winningScore variable
numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent = this.value;
	//change the numInput.value string into a numerical value, make the winning score that value
	winningScore = Number(this.value);
})

