// Dog Years
// Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

// Here’s how you convert your age from “human years” to “dog years”:

// The first two years of a dog’s life count as 10.5 dog years each.
// Each year following equates to 4 dog years.

// variable set to my age
var myAge = 19;

let earlyYears = 2;
earlyYears *= 10.5; // multiply the value in the variable earlyYears

//since we already accounted the first 2 years, delete 2 years from our current age
let laterYears = myAge - 2;

//calculate the number of dog year accounted by later years
laterYears *= 4;

// to check
console.log(earlyYears, laterYears);

myAgeInDogYears = earlyYears + laterYears;

var myName = "Mohamed Saud Asslahi";
myName = myName.toLowerCase();
console.log(myName);

// statement that prints my name and age in dogs years

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
