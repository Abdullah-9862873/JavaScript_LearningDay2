// Introduction to Objects
// Obj are reference data types
// Obj don't have indexx
// obj have key value pairs

const person = {
    name: "Abdullah",
    age: 20,
    hobbies: ["Listening Music", "Coding"]
}

console.log(person);

person.gender = "male";

console.log(person);


// How to access data from objects

console.log(person.name);
console.log(person.age);

        // You can also access data using
console.log(person["hobbies"]);

        // By default the key is in strings in Javascript

// How to add key value pairs to objects

// person.height = "5.10";
person["height"] = "5.10";
console.log(person.height);
