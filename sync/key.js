//key collection in js refers to data collections that are indexed by keys rather than by numerical indexes.
// Examples are maps and sets
// map is a collection of key-value pairs where keys can be of any type, including objects, primitives, and functions.
// set is a collection of unique values (not key-value pairs).

//map

// const myMap = new Map();

// myMap.set(1, "apple");
// myMap.set(2, 'ball');
// myMap.set(3, "cat");

// console.log(myMap.get(2));

// myMap.forEach((value, key) => {
//     console.log(key + ' ' + value);
// });

// console.log(myMap.size);

// myMap.delete(2)


// myMap.clear();
// console.log(myMap.size)


//WeakMap in js is a special kind of collection that holds key-value pairs, where keys must be objects. Here the keys are weakly referenced.

// //set

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add("hello");

// console.log(mySet.has("hello"))

// mySet.delete(3)

// mySet.clear();
// console.log(mySet.size);

// //weakSet

const weakSet = new WeakSet();

const obj1 = { name: "john" };
const obj2 = { name: 'jane' };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1))

//Typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. 
let arr = [1,2,3,4]