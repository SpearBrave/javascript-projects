// Declare and assign the variables below
let SpaceShuttle= "Screaming Eagle";
let ShuttleSpeed=17500;
let DistanceToMars=225000000;
let DistanceToTheMoon=384400;
let MilesPerKIlometer=.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof SpaceShuttle);
console.log(typeof ShuttleSpeed);
console.log(typeof DistanceToMars);
console.log(typeof DistanceToTheMoon);
console.log(typeof MilesPerKIlometer);
// Calculate a space mission below
let MilesToMars= DistanceToMars*MilesPerKIlometer;
let HoursToMars= MilesToMars/ShuttleSpeed;
let DaysToMars= HoursToMars/24;
// Print the results of the space mission calculations below
console.log(SpaceShuttle,"will take",DaysToMars,"days to reach Mars.")
// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let MilesToMoon=DistanceToTheMoon*MilesPerKIlometer;
let HoursToMoon=MilesToMoon/ShuttleSpeed;
let DaysToMoon=HoursToMoon/24;

console.log(SpaceShuttle,"will take",DaysToMoon,"days to reach the Mooooon");


console.log("BOB\n","\nBOB")