// a JavaScript program that functions as a simple calculator. This calculator should prompt the user to input two numbers and an operator (+, -, *, /).
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("invalid operator");
  }
}
