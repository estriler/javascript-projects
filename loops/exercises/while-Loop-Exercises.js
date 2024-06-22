const input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuel = 0;
let astronautsAboard = 0;
let altitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  startingFuel = Number(input.question("Please input the starting fuel level: "));

  while(startingFuel < 5000 || startingFuel > 30000){
    startingFuel = Number(input.question("Please input a positive integer between 5000 and 30000: "));
  }

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  astronautsAboard = Number(input.question("How many astronauts are on this mission?: "));

  while(astronautsAboard < 1 || astronautsAboard > 7){
    astronautsAboard = Number(input.question("Please allow for a minimum of 1 or maximum of 7 astonauts per mission: "));
  }
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
  while(startingFuel > 100*astronautsAboard){
    startingFuel -= 100*astronautsAboard;
    altitude += 50;
    // console.log(`Current Fuel: ${startingFuel} units`);
    // console.log(`Current Altitude: ${altitude}km`);
  }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitude} km.`);

if(altitude >= 2000){
  console.log("Orbit achieved!");
}else{
  console.log("Failed to reach orbit.");
}
