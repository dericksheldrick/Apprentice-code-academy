// Task 1: Function Declaration
//Write a function named sum that takes two parameters and returns their sum.

// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(1, 3));

//Write a function called logMessage that accepts a string as a parameter and logs it to the console.

// function logMessage(message) {
//   console.log(message);
// }
// logMessage("Displays the log messages");

//Task 2: function Expressions
//Create an anonymous function that multiplies two numbers and assign it to a variable called multiply.
// const multiply = function (num1, num2) {
//   return num1 * num2;
// };
// console.log(multiply(3, 4));
//Define a function using the Function Constructor stored in a variable divide that takes two parameters and returns their division result
// const divide = function (num1, num2) {
//   const result = num1 / num2;
//   return result;
// };
// console.log(divide(8, 2));
//Task 3: Arrow Functions
// Rewrite the multiply function as an arrow function and store it in a variable called arrowMultiply.
// const arrowMultiply = (num1, num2) => num1 * num2;
// console.log(arrowMultiply(10, 30));
//Create an arrow function isPositive that takes a number and returns true if the number is positive, otherwise returns false.
// const isPositive = (number) =>{
//   if (number > 0){
//     return true;
//   }else{
//     return false;
//   }
//     This code works also but it is too verbose. the code below is an improvement. Boolean expression usually return true or false in either way and arrows function are expression. It wil return either true or false by default,so need of repeating the code again

const isPositive = (number) => number > 0;
console.log(isPositive(100));
console.log(isPositive(-10));
//Display in the broswer
document.body.innerHTML = "Task 1: Function Declaration";
