// Object Destructuring

const band = {
    bandname : "led zeppelin",
    famousSong : "Stairaway to heaaven",
    year : 1968,
    anotherFamousSong : "kashmir", 
};

// The names while destructuring must be same

// const {bandname, famousSong} = band;
// console.log(bandname, famousSong);

// In order to change the names we use colon

const {bandname:myVar1, famousSong: myVar2, ...restProperties} = band;
console.log(myVar1, myVar2, restProperties);