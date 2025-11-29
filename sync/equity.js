let a = 5;
let b = -5;
console.log(a == b);
console.log(a === b);
console.log(Object.is(a, b))

//Object.is is a static method
// == isLooselyEqual
// === isStrictlyEqual
// SameValue - +0 and -0 are not equal 
//SameValueZero - +0 and -0 are considered equal.