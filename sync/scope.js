//scope and the function call stack are closely related concepts that determine how variables are accessed and how functions execute in sequence.

//Global scope: Variables declared outside any function. Accessible from anywhere in your code.
//Function/local scope: Variables declared inside a function. Only available within that function.
//Block scope (ES6): Variables declared with let or const inside {} blocks (loops, conditionals, etc.). Only available inside the block

// let globalVar = "global";
// function test() {
//   let localVar = "local";
//   console.log(globalVar); // Accessible
//   console.log(localVar);  // Accessible
// }
// test()
// console.log(localVar); // Error: not defined

// Recursion in JavaScript refers to the programming technique where a function calls itself to solve a problem by breaking it down into smaller, simpler subproblems.

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;                  // base case
//   }
//   return n * factorial(n - 1); // recursive case
// }
// console.log(factorial(6)); // Output: 120

// //When a function or variable is defined inside another function, it has access to the variables and functions declared in its own scope as well as any outer (parent) scopes up to the global scope. This relationship is determined by the location of the definitions in the code, forming a hierarchy of nested scopes called the scope chain.

// let globalVar2 = "global";

// function outer() {
//   let outerVar = "outer";

//   function inner() {
//     let innerVar = "inner";
//     console.log(globalVar2);  // accessible (global scope)
//     console.log(outerVar);   // accessible (outer's scope)
//     console.log(innerVar);   // accessible (own scope)
//   }

//   inner();

//   console.log(innerVar); // Error: innerVar not defined (lexical scope)
// }

// outer();

// //A closure in JavaScript is a function that retains access to variables from its lexical (parent) scope even after the parent function has finished execution. In other words, a closure "closes over" the variables in its surrounding environment, allowing it to remember and continue to access them across invocations.

function outerFunction(x) {
  let innerVar = 4;

  function innerFunction() {
    return x + innerVar;
  }

  return innerFunction;
}

const closure = outerFunction(9);
console.log(closure()); // Output: 6
