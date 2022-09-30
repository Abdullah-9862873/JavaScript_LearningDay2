// How to iterate objects

const person = {
    name : "Abdullah",
    age : 20,
    "person hobbies" : ["sleeping", "coding", "listening music"]
}

// for(let key in person){
//     console.log(person[key]);
// }

// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }

// for(let key in person){
//     console.log(key, ": ", person[key]);
// }

// console.log(Object.keys(person));


// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }