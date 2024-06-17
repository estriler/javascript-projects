// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let fuelLaunchReady = false;
let crewLaunchReady = false
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelLaunchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelLaunchReady = false;
}

console.log("fuelLaunchReady = ", fuelLaunchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewLaunchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewLaunchReady = false;
}

console.log("crewLaunchReady = ", crewLaunchReady);

if (fuelLaunchReady && crewLaunchReady){
   console.log("10...");
   console.log("9...");
   console.log("8...");
   console.log("7...");
   console.log("6...");
   console.log("5...");
   console.log("4...");
   console.log("3...");
   console.log("2...");
   console.log("1...");
   console.log("LIFTOFF!!!!!");
} else {
   console.log("Launch scrubbed.")
}