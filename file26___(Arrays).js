
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);

// Array is reference datatype
// May contain values of more than one 
// data type

let mixed = ["1", "2", "3", "4", "5.8", "Apple", null, undefined];
console.log(mixed);
console.log(typeof mixed);

let obj = {};
console.log(typeof obj);

// To check that it is an array

console.log(Array.isArray
    (mixed));