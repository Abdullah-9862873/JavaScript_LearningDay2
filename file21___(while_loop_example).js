
let num = 10;
let count = 0;
let sum = 0;

while(count<=10){
    sum = sum + count;
    count++;
}

console.log(sum);

// Formula is (n*(n+1))/2;

console.log(`The sum of first ${num} numbers is: `)
console.log((num*(num+1))/2);