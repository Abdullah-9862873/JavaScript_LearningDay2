let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);

// Spread Operator
// let array2 = [...array1];

// let array2 = array1.slice(0);



// Add more elements after concatinating

// Method 1
// let array2 = array1.slice(0).concat(["item3"]);

// Method 2
// let array2 = [].concat(array1, "item3");

// Method 3
// let array2 = [...array1, "item3"];



let oneMoreArray = ["item3", "item4"];

// let array2 = [...array1, ...oneMoreArray];

// let array2 = [].concat(array1).concat(oneMoreArray);

let array2 = array1.slice(0).concat(oneMoreArray);

console.log(array1 === array2);
console.log(array1);
console.log(array2);