// Function Declaration

function singBirthdaySong(){
    console.log("Happy Birthday to You");
}

singBirthdaySong();

function twoPlusFour(){
    console.log(2+4);
}

twoPlusFour();


function sum(a, b){
    return a+b;
}

console.log(sum(9,4));

function isEven(num){
    return num%2===0;
}
console.log(isEven(1232));


function firstChar(str){
    console.log(str[0]);
}

firstChar("Abdullah");

function findTarget(arr, target){
    for(let it=0; it<arr.length; it++){
        if(arr[it] === target){
            return it;
        }
    }
    return -1;
}

const arr = ["10", "11", "12", "13"];
console.log(findTarget(arr, "13"));
