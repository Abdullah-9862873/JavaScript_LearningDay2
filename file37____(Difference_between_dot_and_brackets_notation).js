// Diff between dot and brackets notation

const person = {
    age: 20,
    gender: "male",
    name: "Abdullah",
    "person hobbies": ["sleeping", "coding", "listening music"]
}

console.log(person["person hobbies"]);

const key = "email";

person[key] = "abdullah@gmail.com";

console.log(person);