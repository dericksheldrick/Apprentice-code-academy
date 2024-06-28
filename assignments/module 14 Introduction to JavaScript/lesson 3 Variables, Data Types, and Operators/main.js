document.body.innerHTML = "Variables, Data Types, and Operators";
// Data type

let name = "Derick"; //string
let age = "42"; //integer
let isStudent = "true"; //Boolean
let year = [2020, 2021, 2022, 2024]; //Array
let person = { firstName: "Kimani", lastName: "kamau", age: 12 }; //Object

console.log(name, age, isStudent, year, person);

// arithmetic Operation
let num1 = 33;
let num2 = 6;
console.log(num1 + num2); // Addition of num1 and num2 ->39
console.log(num1 - num2); // Subtraction of num1 and num2 ->27
console.log(num1 * num2); // Multiplication of num1 and num2 ->198
console.log(num1 / num2); // Division of num1 and num2 ->5.5
console.log(num1 % num2); // Modulus of num1 and num2 ->3
//Purpose: is to perform just basic arithmetic operation on the two numbers

// comparison operators
let weight1 = 20;
let weight2 = "20";
console.log(weight1 == weight2); //  Equal to ->true
console.log(weight1 === weight2); // strictly true ->false
console.log(weight1 != weight2); // Not Equal to ->false
console.log(weight1 !== weight2); // Strictly not equal to ->true
console.log(weight1 < 40); // Less than ->true
console.log(weight1 > 5); //Greater than ->true
console.log(weight1 <= 20); //Less than or equal to ->true
console.log(weight1 >= 5); //Greater than or equal to -> true
// Purpose: is to compare the weight of the bags against each other

// logical Operators
let isDev = true;
let apprentice = false;
console.log(isDev && apprentice); //Logical AND - returns false is only one is false.
console.log(isDev || apprentice); //logical OR - return true is one is false.
console.log(!isDev); //logical NOT - give the other value - false
//Purpose: To show the operation of Logical operators. Simple program trying to check is the person is a developer and he is from Apprentice.
