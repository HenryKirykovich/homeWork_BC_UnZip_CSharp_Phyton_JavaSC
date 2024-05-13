document.getElementById("scissors").addEventListener("click", scissors);
document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);

function scissors() {
  user = "scissors";
  document.getElementById("choice_user").innerHTML = `User's choice is: ${user}`;
  comp()
}
function paper() {
  user = "paper";
  document.getElementById("choice_user").innerHTML = `User's choice is: ${user}`;
  comp();
}
function rock() {
  user = "rock";
  document.getElementById("choice_user").innerHTML = `User's choice is: ${user}`;
  comp();
}

  function comp() {
    let gameChoices = ['rock', 'paper', 'scissors'];
    let choice_comp = gameChoices[Math.floor(Math.random() *gameChoices.length)];
    document.getElementById("choice_com").innerHTML = `Computer choice is: ${choice_comp}`;
  
    switch (true) {
      case ((user === "rock" && choice_comp === "scissors") || (user === "paper" && choice_comp === "rock") || (user === "scissors" && choice_comp === "paper")):
        document.getElementById ("winnerDisplay").innerHTML = "User win!"; 
        break;
      case (user === choice_comp):
        document.getElementById ("winnerDisplay").innerHTML = "Tie!"
        break;
      case ((user === "rock" && choice_comp === "paper") || (user === "paper" && choice_comp === "scissors") || (user === "scissors" && choice_comp === "rock")):
        document.getElementById ("winnerDisplay").innerHTML = "Computer win!"; 
        break;
    }
  }    
