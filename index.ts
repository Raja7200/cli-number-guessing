#! /usr/bin/env node


import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random()*6+1);
console.log("welcome to number guessing  game");

const answer = await inquirer.prompt([
  { name: "userguessnumber", type: "number", message: "please guess a number b/w 1 - 10" },
]);

if (answer.userguessnumber === randomnumber) {
  console.log("congratulations your guessed right number");
}else{


    console.log("you guess wrong number");
}


