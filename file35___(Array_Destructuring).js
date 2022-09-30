// Array Destructuring

// let myArray = ["value1", "value2"];

// let myVar1 = myArray[0];
// let myVar2 = myArray[1];

// console.log(myVar1);
// console.log(myVar2);

// This can be done by



// myArray = ["value1", "value2", " value3"];

// let [myVar1, , myVar2] = myArray;
// console.log(myVar1);
// console.log(myVar2);

let myArray = ["value1", "value2", "value3", "value4"];

let myNewArray = ["value3", "value4"];

let [myVar1, myVar2, ...myVar3] = myArray;
console.log(myVar1);
console.log(myVar2);
console.log(myVar3);

