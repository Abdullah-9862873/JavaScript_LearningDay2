// for in loop gives the index

const fruits = ["fruit1", "fruit2", "fruit3"];

for(let index in fruits){
    console.log(index);
}

// To print values

for(let index in fruits){
    console.log(fruits[index].toUpperCase());
}