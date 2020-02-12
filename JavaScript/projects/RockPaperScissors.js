//The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.

//function named getUserChoice that takes a singleparameter userInput.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  //check to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("error");
  }
};

// function for computer choice
const getComputerChoice = function() {
  //Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "error";
  }
};

// function to determine a winner

const determineWinner = (userChoice, computerChoice) => {
  //if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.

  if (userChoice === computerChoice) {
    console.log("Tie !");
  }

  //if statement that checks if the userChoice is 'rock'. Inside the if statement’s block, there is another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not, return a message that the user won.

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("Computer won !");
    } else {
      console.log("user won !");
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("Computer won !");
    } else {
      console.log("User Won !");
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("Computer won !");
    } else {
      console.log("User Won");
    }
  }
};

// function to start the game
const playGame = () => {
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();

  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);

  // determing who won !
  console.log(determineWinner(userChoice, computerChoice));
};

// calling the function to start the game
playGame();
