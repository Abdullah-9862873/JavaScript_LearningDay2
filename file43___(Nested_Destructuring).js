// Nested Destructuring

const employees = [
    {userId: 1, userName: "Abdullah", gender: "male"},
    {userId: 2, userName: "Ahmed", gender: "male"},
    {userId: 3, userName: "komal", gender: "female"},
]

// const [user1, user2, user3] = employees;

// console.log(user1);

const [{userId: firstUserId, gender: firstUserGender}, ,{gender: thirdUserGender}] = employees;

console.log(firstUserId, firstUserGender);
console.log(`The gender of third user is: ${thirdUserGender}`);