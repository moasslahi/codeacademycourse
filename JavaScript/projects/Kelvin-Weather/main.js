// Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

// Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

// convert Kelvin to Celsius, then to Fahrenheit.

// 1) at first i created a constant variable called kelvin
const kelvin = 400;

// converted Kelvin to Celsius by subtracting 273 from the kelvin variable. Stored the result in another variable

let celsius = kelvin - 273;

// calculated fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// used .floor() to round up
fahrenheit = Math.floor(fahrenheit);

//consolelog and string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
