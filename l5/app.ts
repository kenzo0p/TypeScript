let userInput :unknown;
// let userInput :any;
let username:string;
userInput = 10;
username  = "om";

// username = userInput

if (typeof userInput === "string") {
    username = userInput;
}

// never return type in function

function generateError(message:string,code:number):never{
    throw {message:message , errorCode:code}
}

console.log(generateError("An error occured" , 500))