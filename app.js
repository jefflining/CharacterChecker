const readline = require('readline-sync');

const input = require('readline-sync');

let name = readline.question("What is your name? ");

console.log("Hello, " + name + "!");

let position = input.questionInt("What index number would you like to know the character of in your name? ");

let index = name[position];

console.log("The letter that is in the positon of the index number " + position + " in " + name + " is " + index + ".");