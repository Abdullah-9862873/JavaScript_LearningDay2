// Nested if else

let winningNumber = 19;

let userGuess = Number(prompt("Guess a number"));

// prompt takes input in the form of string

console.log(typeof userGuess, userGuess);

if(userGuess === 19){
    console.log("You Guessed Right");
}else if(userGuess<19){
    console.log("Too Low");
}else{
    console.log("Too High");
}

