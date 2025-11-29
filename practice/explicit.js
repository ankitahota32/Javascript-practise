//Explicit binding in JavaScript is a way to explicitly set the value of this for a function using the methods call(), apply(), or bind(). These methods allow you to control what object the this keyword refers to when the function executes, overriding the default or implicit binding.

// How explicit binding works:
// call(thisArg, arg1, arg2, ...): Calls the function immediately, with this set to thisArg and the arguments passed individually.

// apply(thisArg, [argsArray]): Calls the function immediately, with this set to thisArg and arguments passed as an array.

// bind(thisArg): Returns a new function permanently bound to thisArg, which can be called later.

function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello');  // Output: Hello, Alice
greet.apply(person, ['Hi']);  // Output: Hi, Alice

const greetAlice = greet.bind(person);
greetAlice('Hey');            // Output: Hey, Alice

