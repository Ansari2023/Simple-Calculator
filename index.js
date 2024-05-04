#! /usr/bin/env node
"use strict";
//shabang
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "enter your first number", type: "number", name: "firstNumber" },
    { message: "enter your Second Number", type: "number", name: "secondNumber" },
    { message: "select one of the operators to parform action", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Maltiplication", "Division"], }
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
else {
    console.log("Please Select valid Operator");
}
