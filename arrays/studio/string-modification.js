const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstThreeLetters = str.slice(0,3);
let rearrangedString = str.slice(3) + firstThreeLetters;

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`"${str}" in Pig Latin is "${rearrangedString}"`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

let userWord = input.question("Type a word you would like to jumble up! ");
let jumbleNumber = Number(input.question("How many letters would you like jumbled? "));

if(jumbleNumber <= userWord.length){
    let firstHalf = userWord.slice(0, jumbleNumber);
    let rearrangedUserString = userWord.slice(jumbleNumber) + firstHalf;

    console.log(`"${userWord}" all jumbled up is "${rearrangedUserString}"`);
}else{
    let firstHalf = userWord.slice(0, 3);
    let rearrangedUserString = userWord.slice(3) + firstHalf;

    console.log(`"${userWord}" all jumbled up is "${rearrangedUserString}" Also! Did you know "${userWord}" has less characters than ${jumbleNumber}?`);
}