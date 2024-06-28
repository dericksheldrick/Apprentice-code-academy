// write a JavaScript program that prints the Fibonacci sequence up to a specified number

//Iterative Method in JavaScript

function FibonacciSequence(n) {
  let result = [];

  function Fibonacci(n) {
    let sequence = [0, 1];
    for (i = 2; i <= n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[n];
  }

  for (let i = 0; i <= n; i++) {
    result.push(Fibonacci(i));
  }

  return result.join("");
}

console.log(FibonacciSequence(6));

//Recursive Method

// function FibonacciSequence(n) {
//   let result = [];

//   function Fibonacci(n) {
//     if (n <= 1) {
//       return n;
//     } else {
//       return Fibonacci(n - 2) + Fibonacci(n - 1);
//     }
//   }

//   for (let i = 0; i <= n; i++) {
//     result.push(Fibonacci(i));
//   }

//   return result.join("");
// }

// console.log(FibonacciSequence(5));

// document.body.innerHTML =
//   "write a JavaScript program that prints the Fibonacci sequence up to a specified number";
