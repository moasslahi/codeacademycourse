// variable called userName set to an empty string.
let userName = "Mo";

//ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — string interpolation will log Hello, Jane! to the console. Otherwise, log Hello!.
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello !");

// a variable named userQuestion. should be the questionthe user wants to ask the Magic Eight Ball.
let userQuestion = "where is mo?";

// console.log() for the userQuestion, stating what was asked. include the user’s name in the console.log() statement
console.log(`Hello ${userName}!, your question is '${userQuestion}'`);

randomNumber = Math.floor(Math.random() * 8);

eightBall = "";

//a control flow that takes in the randomNumber we made in step 4, and then assigns eightBall to a reply that a Magic Eight Ball would return
switch (randomNumber) {
  case 0:
    eightBall = "Yes";
    break;
  case 1:
    eightBall = "No";
    break;
  case 2:
    eightBall = "maybe";
    break;
  case 3:
    eightBall = "not sure";
    break;
  case 4:
    eightBall = "ill think";
    break;
  case 5:
    eightBall = "certain!";
    break;
  case 6:
    eightBall = "nahh";
    break;
  case 7:
    eightBall = "dont know";
    break;
  default:
    console.log("NOT SURE");
    break;
}

console.log(eightBall);
