//Strict mode in JavaScript is like turning on a special "rules mode" for your code to help catch mistakes and make your code safer and easier to fix.
"use strict";
x = 5; // Error! x is not declared with var, let, or const

//The this keyword in a method refers to the object that is calling or owning the method. When used inside a method of an object, this typically points to the current object instance, allowing access to other properties or methods of that object.

const person = {
  name: 'Alice',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

person.greet(); // Output: Hello, Alice

//The this keyword in a JavaScript function refers to the context in which the function is executed, which depends on how the function is called:

// In a regular function (non-arrow), when called in the global scope, this refers to the global object (window in browsers). However, in strict mode, this is undefined.

// When a function is called as a method of an object, this refers to that object, allowing access to its properties.

// Arrow functions do not have their own this; instead, they inherit this from their enclosing lexical context.

// Functions called with call(), apply(), or bind() can explicitly set this to any object.

// function regularFunction() {
//   console.log(this);
// }
// regularFunction();
// // Logs global object (window in browsers), or undefined in strict mode.

// const obj = {
//   name: 'Alice',
//   sayName: function() {
//     console.log(this.name);
//   }
// };
// obj.sayName(); // Logs 'Alice' because this refers to obj.

// const arrowFunc = () => {
//   console.log(this);
// };
// arrowFunc();
// // Logs the enclosing context's this (for example, global object if top-level).

// When the this keyword is used alone (not inside a method, function, or object), its value depends on the execution context and mode:

// In the global scope (outside of any function or object), this refers to the global object, which is window in browsers and global in Node.js.

// In strict mode, using this alone still refers to the global object in the global context. However, inside standalone functions in strict mode, this becomes undefined.

// Using console.log(this); at the top level in a browser logs the window object. In Node.js, it refers to the module's export object, not the global object.

// In JavaScript event handlers, the this keyword typically refers to the element that the event handler is attached to. When an event occurs and triggers the handler function, this inside that function points to the event target element, allowing direct access to the element's properties and methods.

const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // logs the button element
  this.style.backgroundColor = 'blue';
});

// In arrow functions, the this keyword behaves differently than in regular functions. Arrow functions do not have their own this context. Instead, they inherit the this value lexically from the surrounding (enclosing) scope where the arrow function is defined. This behavior is called lexical scoping of this.

const obj = {
  name: 'Alice',
  regularFunc: function() {
    console.log(this.name); // 'Alice'
  },
  arrowFunc: () => {
    console.log(this.name); // undefined or from outer scope, not 'Alice'
  }
};

obj.regularFunc(); // Logs 'Alice'
obj.arrowFunc();   // Logs undefined because this is from outer scope (e.g., window)

//Function borrowing in JavaScript is a technique where one object uses a method defined on another object without having to redefine or copy the method. This allows for code reuse and dynamic behavior by explicitly setting the this context within the borrowed function.

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function() {
//     return this.firstName + ' ' + this.lastName;
//   }
// };

// const employee = {
//   firstName: 'Jane',
//   lastName: 'Smith'
// };

// // Borrow fullName method from person and use it on employee
// console.log(person.fullName.call(employee)); // Output: Jane Smith
