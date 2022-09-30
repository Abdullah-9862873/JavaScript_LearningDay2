// Function Expression

const singHappyBirthday = function(){
    console.log("Happy Birthday to You...");
}

singHappyBirthday();

const twoPlusFour = function(){
    console.log(2+4);
}

twoPlusFour();

const sum = function(a, b){
    return a+b;
}

console.log(sum(9,4));

const isEven = function(num){
    return num%2===0;
}
console.log(isEven(1232));

const firstChar = function(str){
    console.log(str[0]);
}

firstChar("Abdullah");

const findTarget = function(arr, target){
    for(let it=0; it<arr.length; it++){
        if(arr[it] === target){
            return it;
        }
    }
    return -1;
}

const arr = ["10", "11", "12", "13"];
console.log(findTarget(arr, "13"));