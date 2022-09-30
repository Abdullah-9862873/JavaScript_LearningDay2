// While loop in array

const fruits = ["apple", "mango", "banana", "grapes"];

const fruits2 = [];

let i=0;
while(i<fruits.length){
    fruits2.unshift(fruits[i]);
    i++;
}

for(let j=0; j<fruits2.length; j++){
    console.log(fruits2[j]);
}