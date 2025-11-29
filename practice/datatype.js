// Datatype: -
// String
// Number
// Boolean
// undefined
// BigInt
// null
// symbol

// let a = 23;
// let b = "23";
// let c = false;
// let d;
// let e = null;
// let f = 123456789012345678901234567890n;

// console.log(typeof (a));
// console.log(typeof (b));
// console.log(typeof (c));
// console.log(typeof (d));
// console.log(e);
// console.log(typeof (f));


//symbol datatype:- The symbol datatype in js represents a unique and immuatable primitive value used primarily as unique identifiers for object properties;
const sys1 = Symbol('id')
const sys2 = Symbol('id')

// console.log(sys1 === sys2)

let a = Symbol("5");
let b = Symbol("5");

console.log(a === b)