// The event loop is a fundamental mechanism in JavaScript and many other programming environments that manages the execution of asynchronous tasks.
// It allows JavaScript, which is single-threaded, to perform non-blocking operations by continuously checking the call stack and event queue.
// This process helps JavaScript run multiple operations efficiently without freezing or blocking other code.

// How the Event Loop Works
// JavaScript executes synchronous code first, pushing function calls onto the call stack.

// Asynchronous tasks (e.g., timers, API calls, user events) are handled by browser or Node.js APIs and put their callbacks into the event queue when ready.

// The event loop continuously monitors the call stack and event queue.

// If the call stack is empty, the event loop picks the next task from the event queue and processes it by pushing it onto the call stack.
// This mechanism allows asynchronous handling while maintaining single-threaded execution.