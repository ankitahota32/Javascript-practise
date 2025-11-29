// let age = 21;
// if (age > 18) {
//   console.log("Eligible for vote");
// } else {
//   console.log("not eligible");
// }

//switch case
// const prompt = require('prompt-sync')();
// let num1 = 22
// let num2 = 15
// let result;
// let operator = prompt("Enter the operator:").trim();

// switch (operator) {
//   case '+':
//     result = num1 + num2;
//     console.log(result)
//     break;
//   case '-':
//     result = Math.abs(num1 - num2);
//     console.log(result)
//     break;
//   case '*':
//     result = num1 * num2;
//     console.log(result);
//     break;
//   case '/':
//     result = num1 / num2;
//     console.log(result);
//     break;
//   default:
//     console.log("invalid operator");
// }






//The try/catch/finally statement in JavaScript is a control flow structure used for handling exceptions and ensuring certain code runs regardless of success or failure.
// try block: Contains code that may throw an exception during execution.
// catch block: Executes if an exception is thrown in the try block, capturing and handling the error.
// finally block: Always executes after the try and catch blocks, regardless of whether an error occurred or not. It is typically used for cleanup tasks
// The throw statement in JavaScript is used to create and throw user-defined exceptions.

// try {
//   let number = 30;
//   if (number < 20) {
//     throw new Error("Number has to be greater than 20");
//   }
//   console.log("This will not run if number < 20");
// } catch (error) {
//   console.log("Caught an error:", error.message);
// }

//Error objects in JavaScript represent runtime errors and provide detailed information about exceptions thrown during program execution. These objects are instances of the built-in Error class or its subclasses, such as SyntaxError, ReferenceError, TypeError, and others.
