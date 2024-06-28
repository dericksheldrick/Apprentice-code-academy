document.body.innerHTML = "Conditional Statements";

// a JavaScript program that functions as a simple calculator. This calculator should prompt the user to input two numbers and an operator (+, -, *, /).

//Switch Example
// function calculator(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       console.log(num1 + num2);
//       break;
//     case "-":
//       console.log(num1 - num2);
//       break;
//     case "*":
//       console.log(num1 * num2);
//       break;
//     case "/":
//       console.log(num1 / num2);
//       break;
//     default:
//       console.log("invalid operator");
//   }
// }
// // prompt user to enter that is the numbers and the operator
// let number1 = prompt("Enter the first number:");
// let number2 = prompt("Enter the second number:");
// let operator = prompt("Enter the operator (+, -, *, /):");

// // used parsefloat to convert my input into numbers. This was to issue that I was experiecing with the addition operator
// number1 = parseFloat(number1);
// number2 = parseFloat(number2);

// // call the function calculator
// calculator(number1, number2, operator);

// if else statements example
function calculator(num1, num2, operator) {
  if (operator == "+") {
    console.log(num1 + num2);
  } else if (operator == "-") {
    console.log(num1 - num2);
  } else if (operator == "*") {
    console.log(num1 * num2);
  } else if (operator == "/") {
    console.log(num1 / num2);
  } else {
    console.log("invalid  operator");
  }
}
//prompt user
let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
let operator = prompt("Enter the operator (+, -, *, /):");
//change input into numbers
number1 = parseFloat(number1);
number2 = parseFloat(number2);
//cal the function
calculator(number1, number2, operator);
