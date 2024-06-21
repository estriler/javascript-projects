const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodCabinet = food.split(",").sort();
let equipmentCabinet = equipment.split(",").sort();
let petCabinet = pets.split(",").sort();
let sleepAidsCabinet = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [foodCabinet, equipmentCabinet, petCabinet, sleepAidsCabinet];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let userCabinet = Number(input.question("Choose a cabinet to open! (0 - 3): "));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.



//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

if(userCabinet <= 3 && userCabinet >= 0){
    console.log(`Cabinet "${userCabinet}" contains: ${cargoHold[userCabinet].join(", ")}.`);
    let userItem = input.question(`What item were you looking for in cabinet ${userCabinet}? `)

    if(cargoHold[userCabinet].includes(userItem)){
        console.log(`Cabinet ${userCabinet} DOES contain ${userItem}!`);
    }else{
        console.log(`Cabinet ${userCabinet} DOES NOT contain ${userItem}... `);
    }
}else{
    console.log("Error: Number entered is not valid!");
}
