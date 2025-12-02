// Async/await is a way to write asynchronous JavaScript code that looks and behaves like synchronous code, making it easier to understand and manage.
// The async keyword is used before a function to say that the function will always return a promise.

// Inside this async function, the await keyword is used before a promise to pause the execution of the function until that promise is resolved (finished) or rejected (failed).

// While awaiting, JavaScript can do other tasks and doesn’t freeze the whole program.

// This makes it simpler to work with promises without chaining .then() methods and avoids the complexity of nested callbacks.

// function getJuice() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Here is your juice 🧃");
//     }, 2000);
//   });
// }

// async function drinkJuice() {
//   console.log("Waiting for juice...");
//   const juice = await getJuice(); // wait here!
//   console.log(juice);
// }

// drinkJuice();


//project example
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/3');
  const data = await response.json();
  console.log(data);
}
fetchData();
