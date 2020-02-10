// A function is a reusable block of code that groups 
// together a sequence of statements to perform a specific task.

function functionIdentifier(//parameter) {
    //function body
}






// A function is a reusable block of
// code that groups together a sequence
// of statements to perform a specific task.

// 1 => funcltion Declaration
// function keyword
// function identifier
// function code
// then call it

function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Mo");

//return
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//helper function
function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

// 2 => Function Expressions
const plantNeedsWater = function(day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater("Tuesday"));

// 3 => Arrow functions
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

// normal
const squareNum = num => {
  return num * num;
};

// changes to this
const squareNum = num => num * num;

// example
const plantNeedsWater = day => (day === "Wednesday" ? true : false);
