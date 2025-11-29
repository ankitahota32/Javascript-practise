// setTimeout is a JavaScript function that schedules a piece of code (like a function) to run after a specified delay in milliseconds, making it perfect for delaying tasks without blocking other code.

// console.log("Play!");
// setTimeout(() => {
//   console.log("Eat chocolate!");
// }, 5000);
// console.log("Still playing...");

// setTimeout(() => {
//   console.log("My name is ankita")
// }, 6000)

// Alert after 3 seconds
function sayHello() {
  console.log("Hello!");
}
setTimeout(sayHello, 3000);  // Runs once after 3000ms [web:11][web:13]

const timerId = setTimeout(() => console.log("Arrow function!"), 2000);
clearTimeout(timerId);  // Cancels it 

// The second block declares timerId with setTimeout(() => console.log("Arrow function!"), 2000), which schedules an arrow function callback after 2000ms (2 seconds) and assigns the unique numeric ID (e.g., 1) returned by setTimeout to timerId—but the immediate clearTimeout(timerId) cancels that timer using the ID before the delay even finishes, preventing the console.log from ever running