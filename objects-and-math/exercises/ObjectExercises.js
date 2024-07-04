let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};


// After you have created the other object literals, add the astronautID property to each one.
let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

function generateAstronautID(crew){
   let idArray = [];
   for(let i = 0; i < crew.length; i++){
      let num = Math.ceil(Math.random()*10);
      while(idArray.includes(num)){
         num = Math.ceil(Math.random()*10);
      }
      idArray.push(num);
   }
   return idArray;
}

function assignAstronautID(crew, idArray){
   for(let i = 0; i < crew.length; i++){
      crew[i]["astronautID"] = idArray[i];
   }
   return;
}
assignAstronautID(crew, generateAstronautID(crew));

// Add a move method to each animal object

function addMoveMethod(crew){
   for(let i = 0; i < crew.length; i++){
      crew[i]["move"] = Math.round(Math.random()*10);
   }
   return;
}
addMoveMethod(crew);

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

function crewReports(animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Thier ID is ${animal.astronautID}.`)
}

// Start an animal race!

function fitnessTest(array){
   let raceResults = [];
   for(let i = 0; i < array.length; i++){
      let distance = 0;
      let turns = 0;
      while(distance < 20){
         distance += array[i].move;
         turns += 1;
      }
      raceResults.push(turns);
      console.log(`${array[i].name} took ${turns} turns to take 20 steps.`)
   }
   return raceResults;
}

fitnessTest(crew);
