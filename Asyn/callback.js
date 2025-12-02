// A callback function is a function you give to another function so it can call it later when a task is finished.
// A callback function is a function that is passed as an argument to another function and then executed inside that outer function to complete a specific task.
// Callbacks can be synchronous, meaning they execute immediately after the outer function, or asynchronous, meaning they execute at a later time, such as after an asynchronous operation completes. Common uses of callbacks include updating the user interface after data is loaded, processing results after a file is read, or handling events like clicks or responses from API calls.

function finishHomework(callback) {
    callback(); // call back when done
  console.log("I am doing homework...");
}

function play() {
  console.log("Now I can play!");
}

finishHomework(play);

//callback hell
// Callback hell is a situation in programming, especially in JavaScript, where there are multiple nested callback functions, causing the code to become deeply indented and difficult to read and maintain.
// This phenomenon is also known as the "pyramid of doom" because the nested structure of callbacks resembles a pyramid shape in the code. Callback hell often occurs when performing a sequence of asynchronous operations where each subsequent operation depends on the result of the previous one.

doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doMore(newResult, function(finalResult) {
      doLast(finalResult, function() {
        console.log("Done!");
      });
    });
  });
});
