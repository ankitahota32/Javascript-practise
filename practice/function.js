//function parameters are the variables listed in the function definition that receive values (called arguments) when the function is called.
//Arguments are the actual values passed to the function when it is called
//Parameters are the names defined in the function declaration

// function add(a,b) { //function parameter
//     let result = a + b;
//     console.log(result);
// }

// add(13, 67); //function arguements
// add(22, 7);

//The rest parameter syntax (...) lets a function accept an indefinite number of arguments as an array

// function sum(...numbers) {
//     console.log(numbers.reduce((total, num) => total + num, 0))
// }

// sum(1, 4, 6, 8, 6, 4);

//default parameters in js allows you to assign default values to function parameters directly in the function signature

// function product(a=2, b=5) {
//     let result = a * b;
//     console.log(result)
// }

// product();
// product(3);
// product(5, 2)



//Arrow functions are a shorter syntax for writing function expressions in JavaScript, with some important differences in how they handle this, arguments, and use as methods or constructors.
//Arrow functions replace the function keyword with => and are usually assigned to a variable or used inline.

// Normal function expression
const sum = function (...numbers) {
  let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
};
console.log(sum(3,5,5,6,3,7,2));

// // Arrow function (full form)
// const add = (a, b) => {
//   console.log(a + b);
// };
// add(6, 8);

// No parameters
// const sayHi = () => console.log("Hi");
// sayHi()

// One parameter (no parentheses needed)
    // const square = x => console.log(2 * 2);
    // square()

// Multiple parameters
// const multiply = (a, b) => console.log(4 * 8);
// multiply()

// Multi-line body (must use return)
// const sumTo = n => {
//   let sum = 0;
//   for (let i = 1; i <= 3; i++) sum += i;
//   console.log(sum);
// };
// sumTo()


//An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is executed immediately after it is defined.
// (function() {
//   var privateVar = "hidden";
//   console.log(privateVar); // Output: hidden
// })();
// console.log(privateVar);

//In JavaScript, the arguments object is a special, array‑like object available inside every non‑arrow function that contains all values passed to that function call, regardless of the declared parameters. It is mainly used in older or legacy code to handle functions that take a variable number of arguments, though modern code usually prefers rest parameters (...args).