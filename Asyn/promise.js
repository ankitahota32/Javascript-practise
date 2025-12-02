//Promise was created to overcome callback hell
// Promises in JavaScript are objects that represent the eventual completion or failure of an asynchronous operation, providing a cleaner alternative to callbacks for handling tasks like API calls or timers.
// They exist in three states: pending (initial state), fulfilled (success with a value), or rejected (failure with a reason), allowing code to respond appropriately without nesting.

let cookiePromise = new Promise((resolve, reject) => {
  let dinnerFinished = false;

  if (dinnerFinished) {
    resolve("Here is your cookie!");
  } else {
    reject("No cookie for you");
  }
});

cookiePromise
  .then((success) => {
    console.log("Got the cookie"); // When promise is fulfilled
  })
  .catch((error) => {
    console.log(error); // When promise is rejected
  });
