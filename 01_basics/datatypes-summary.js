//Primitive

// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt


//Reference (Non Primitive)

// Array,Objects,Functions



// types of values and their result

// undefined = undefined
// null = object
// boolean = boolean
// number = number
// string = string
//function object = function


//++++++++++++++Memory allocation++++++++++++++

// Stack(Primitive) , Heap (Non-Primitive)

let myYoutubename = "ayushyadavdotcom"

let anothername = myYoutubename
anothername = "ChaiaurCode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne

userTwo.email = "ayush@google.com"

console.log(userOne.email);
console.log(userTwo.email);