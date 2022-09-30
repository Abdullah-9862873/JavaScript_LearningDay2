let fruits = ["apple", "banana", "mango"];

console.log(fruits);
fruits.push("orange");
console.log(fruits);

let removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);

// Shift is used to remove element from front

fruits.shift();
console.log(fruits);

// Unshift is used to push element in front

fruits.unshift("apple");
console.log(fruits);