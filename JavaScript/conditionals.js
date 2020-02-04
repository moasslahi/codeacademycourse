// if statements

let sale = true;
if (sale) {
  console.log("Time to buy!");
}

// if ....else statemnet
let sale = true;

sale = false;

if (sale) {
  console.log("Time to buy!");
} else {
  console.log("Time to wait for a sale.");
}

//Comparison Operators

// Less than: <
// Greater than: >
// Less than or equal to: <=
// Greater than or equal to: >=
// Is equal to: ===
// Is NOT equal to: !==

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

//Logical Operators

// the and operator (&&)
// the or operator (||)
// the not operator, otherwise known as the bang operator (!)

let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" && tirednessLevel > 8) {
  console.log("time to sleep");
} else {
  console.log("not bed time yet");
}

// truthy and falsy
let wordCount = 2;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log("Better get to work!");
}

let favoritePhrase = "";

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log("This string is definitely empty.");
}

// Truthy and Falsy Assignment
// Say you have a website and want to take a user’s
// username to make a personalized greeting.
// Sometimes, the user does not have an account,
// making the username variable falsy.
// The code below checks if username is defined and assigns
// a default string if it is not:

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = "Stranger";
}

// let defaultName = username || 'Stranger';
// Because || or statements check the left-hand condition first,
// the variable defaultName will be assigned the actual value of username if is truthy,
// and it will be assigned the value of 'Stranger' if username is falsy.
// This concept is also referred to as short-circuit evaluation.
let defaultName = username || "Stranger";

//Ternary Operator
let isNightTime = true;
isNightTime
  ? console.log("Turn on the lights!")
  : console.log("Turn off the lights!");

// The condition, isNightTime, is provided before the ?.
// Two expressions follow the ? and are separated by a colon :.
// If the condition evaluates to true, the first expression executes.
// If the condition evaluates to false, the second expression executes.
// Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.

let isLocked = false;
isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;
isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrase = "Love That!";
favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");

// else if
let season = "summer";

if (season === "spring") {
  console.log("It's spring! The trees are budding!");
} else if (season === "winter") {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === "fall") {
  console.log("It's fall! Leaves are falling!");
} else if (season === "summer") {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log("Invalid season.");
}

// switch statements

let myAge = 19;
switch (myAge) {
  case 18:
    console.log("Iam sorry you cant drive");
    break;
  case 19:
    console.log("You can now drive");
    break;
  default:
    console.log("woohooo goo");
    break;
}

// conditionals
// An if statement checks a condition and will execute a task if that condition evaluates to true.
// if...else statements make binary decisions and execute different code blocks based on a provided condition.
// We can add more conditions using else if statements.
// Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
// The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
// The logical operator ||, or “or”, checks if either provided expression is truthy.
// The bang operator, !, switches the truthiness and falsiness of a value.
// The ternary operator is shorthand to simplify concise if...else statements.
// A switch statement can be used to simplify the process of writing multiple else if statements.
// The break keyword stops the remaining cases from being checked and executed in a switch statement.
