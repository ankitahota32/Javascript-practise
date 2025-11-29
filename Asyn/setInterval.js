// The JavaScript method setInterval is used to repeatedly call a function or execute a block of code at fixed time intervals specified in milliseconds.
// It takes at least two parameters: the function to execute and the delay time between each execution in milliseconds.
// Once started, the function continues to run at those intervals until it's explicitly stopped by calling clearInterval with the interval ID returned by setInterval or until the webpage or environment is closed.
// setInterval is commonly used for tasks that require repeated execution, such as creating timers, updating animations, refreshing data, or displaying dynamic content at regular intervals.

// Function to be executed repeatedly
function greet() {
  console.log("Hello, every 2 seconds!");
}

// Start setInterval and store the interval ID
let intervalId = setInterval(greet, 2000);

// Stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared, no more greetings.");
}, 10000);
