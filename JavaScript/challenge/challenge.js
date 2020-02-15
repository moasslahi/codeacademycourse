// 1
// a function canIVote() that takes in a number,
// representing the person’s age, and returns the boolean
// true if they are 18 years old or older,
// and the boolean false if they are not.

const canIVote = age => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(canIVote(19));

// 2
//a function, agreeOrDisagree(), that takes in two strings,
// and returns 'You agree!' if the two strings are the same
//  and 'You disagree!' if the two strings are different.

const agreeOrDisagree = (string1, string2) => {
  if (string1 === string2) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};

console.log(agreeOrDisagree("yep", "yep"));

// 3
//function, lifePhase(), that takes in a person’s age, as
//a number, and returns which phase of life they are in.

const lifePhase = age => {
  if (age > 0 && age < 4) {
    return "baby";
  } else if (age >= 4 && age <= 12) {
    return "child";
  } else if (age >= 13 && age <= 19) {
    return "teen";
  } else if (age >= 20 && age <= 64) {
    return "adult";
  } else if (age >= 65 && age <= 140) {
    return "senior citizen";
  } else if (age <= 0 || age >= 140) {
    return "This is not a valid age";
  }
};

console.log(lifePhase(5));

// 4
// a function, finalGrade(). It should:

// take three arguments of type number
// find the average of those three numbers
// return the letter grade (as a string) that the average corresponds to
// return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100

const finalGrade = (grade1, grade2, grade3) => {
  if (
    grade1 < 0 ||
    grade1 > 100 ||
    grade2 < 0 ||
    grade2 > 100 ||
    grade3 < 0 ||
    grade3 > 100
  ) {
    return "You have entered an invalid grade.";
  }

  const average = (grade1 + grade2 + grade3) / 3;

  if (average > 0 && average < 59) {
    return "F";
  } else if (average >= 60 && average <= 69) {
    return "D";
  } else if (average >= 70 && average <= 79) {
    return "C";
  } else if (average >= 80 && average <= 89) {
    return "B";
  } else if (average >= 90 && average <= 100) {
    return "A";
  }
};

console.log(finalGrade(99, 92, 95));

// 5
// a function, reportingForDuty(), that has two string parameters,
// rank and lastName, and returns a string in the following format:
// ‘rank lastName reporting for duty!’

const reportingForDuty = (rank, lastName) =>
  `${rank} ${lastName} reporting for duty!`;

// 6
// a function, calculateWeight(). It should:

// have two parameters: earthWeight and planet
// expect earthWeight to be a number
// expect planet to be a string
// return a number representing what that Earth-weight would equate to on the planet passed in

const calculateWeight = (earthWeight, planet) => {
  if (planet === "Mercury") {
    return earthWeight * 0.378;
  } else if (planet === "Venus") {
    return earthWeight * 0.907;
  } else if (planet === "Mars") {
    return earthWeight * 0.377;
  } else if (planet === "Jupiter") {
    return earthWeight * 2.36;
  } else if (planet === "Saturn") {
    return earthWeight * 0.916;
  } else {
    return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
};

console.log(calculateWeight(100, "Jupiter"));

// 7
// a function, truthyOrFalsy(), that takes in any value and returns
// true if that value is truthy and
// false if that value is falsy.

const truthyOrFalsy = value => {
  if (value) {
    return true;
  } else {
    return false;
  }
};

console.log(truthyOrFalsy(0));

//8
const sillySentence = (adj, verb, noun) => {
  return `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;
};

console.log(sillySentence("excited", "love", "functions"));


//9 
const tipCalculator = (quality, total) => {
  switch (quality) {
      case 'bad':
          return total * .05;
      case 'ok':
          return total * .15;
      case 'good':
          return total * .20;
      case 'excellent':
          return total * .30;
      default:
          return total * .18;


// 10
const toEmoticon = emotion => {
  switch(emotion) {
    case 'shrug':
      return '|_{"}_|';
    case 'smiley face':
      return ':)';
    case 'frowny face':
      return ':(';
    case 'winky face':
      return ';)';
    case 'heart':
      return '<3';
    default:
      return '|_(* ~ *)_|';
  }
}

console.log(toEmoticon("whatever")) 