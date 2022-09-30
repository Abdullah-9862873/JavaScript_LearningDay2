// Objects Inside Arrays

const obj = [
    {userId: 1, userName: "Abdullah", gender: "male"},
    {userId: 2, userName: "Ahmed", gender: "male"},
    {userId: 3, userName: "komal", gender: "female"},
]

// Iterate

for(let key of obj){
    console.log(key.userId, key.userName);
}