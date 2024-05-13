const gameChoice = ["rock","paper","scissors"];
const btnChoice = document.getElementById("btnChoice");


for (let user of gameChoice) {
  console.log(user)
  const btn = document.createElement("button");
  btn.id  = user;
  btn.innerHTML = user;
  btn.addEventListener("click", comp);
  btnChoice.append(btn);
}

  function comp(event) {
    user = event.target.id;    
    let choice_comp = gameChoice[Math.floor(Math.random() *gameChoice.length)];
    document.getElementById("choice_com").innerHTML = `Computer choice is: ${choice_comp}`;

  document.getElementById("choice_user").innerHTML = `You chose rock!: ${user}`;
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

let backButton = document.createElement("button");
backButton.textContent = "Go Back";
backButton.className = "option-btn back-btn";
backButton.addEventListener("click", () => {
  // Reloaded the whole page for the code to not save previous answers
  location.reload();
});
buttonContainer.appendChild(backButton);

const buttons = document.querySelectorAll(".option-btn");
buttons.forEach((button) => {
  button.removeEventListener("click", button.clickHandler);
  // Remove the button from the DOM

});