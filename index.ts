#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter your First Number", type: "number", name: "firstNumber" },
  { message: "Enter your Second Number", type: "number", name: "secondNumber"},
  { message: "select one of the operators to parform action", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Maltiplication", "Division"],}
]);
// console.log(answer);
//conditional statment

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Maltiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
  console.log(answer.firstNumber % answer.secondNumber);
}
else {
  console.log("Please Select valid Operator");
}
