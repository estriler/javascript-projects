// Declare and assign the variables below
let name = "Determination";
let speed = 17500;
const distanceToMars = 225000000;
const distanceToMoon = 384400;
const milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof name);
console.log(typeof speed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilometer);

// Calculate a space mission below
let milesToMars = distanceToMars*milesPerKilometer;
console.log(milesToMars);

let hoursToMars = milesToMars/speed;
console.log(hoursToMars);

let daysToMars = hoursToMars / 24;
console.log(daysToMars);

// Print the results of the space mission calculations below

console.log(name , "will take" , daysToMars , "to reach Mars.")

// Calculate a trip to the moon below
let milesToMoon = distanceToMoon*milesPerKilometer;
console.log(milesToMoon);

let hourstoMoon = milesToMoon/speed;
console.log(hourstoMoon);

let daysToMoon = hourstoMoon / 24;
console.log(daysToMoon);

// Print the results of the trip to the moon below

console.log(name , "will take" , daysToMoon , "to reach the Moon.");
console.log(2 ** 2 ** 3 * 3);