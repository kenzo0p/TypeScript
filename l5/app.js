var userInput;
// let userInput :any;
var username;
userInput = 10;
username = "om";
// username = userInput
if (typeof userInput === "string") {
    username = userInput;
}
// never return type in function
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
