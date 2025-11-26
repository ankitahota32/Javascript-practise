let a = 13;
const b = 22;
var c = 36;
let d = 99;

// console.log(a)
// console.table([a, b, c, d])

let x = 23;

// if (true) {
//     let x = 11; // this won't give error
//     console.log(x)
// }
// console.log(x)

// let c = "hello";
// let c = "hiii"; // this will give error
// console.log(c)

// const g = "123";
// let g = "111"; // This will give error

//What happens when there's a new scope

const j = 77;

function greet() {
    let j = 10;
    console.log(j);
}
greet()
console.log(j)