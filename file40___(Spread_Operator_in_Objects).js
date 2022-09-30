// Spread Operator in arrays

const array1 = ["value1", "value2"];
const array2 = ["value3", "value4"];

const newArray = [...array1, ...array2];
console.log(newArray);

// Shortcut 
const array3 = [..."1234567"];
console.log(array3);


// Spread operator in objects

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key3: "value3",
    key4 : "value4"
}

const newObj = {...obj1, ...obj2};
console.log(newObj);


// Take index as key and assign values
const myNewObject = {..."abc"};
console.log(myNewObject);

const alphabets = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(alphabets);

