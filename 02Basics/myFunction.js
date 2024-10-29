"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("om");
addTwo(5);
// let myValue = addTwo(5)
function signUpUser(name, email, password, isPaid) { }
var logInUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
logInUser("om", "o@o.com");
signUpUser("om", "h@c.com", "823y", true);
function getValue(val) {
    if (val > 5) {
        return true; // if these case comes then use like this were we can acces two types of data then use normal function
    }
    return "200 OK";
}
// const heroes  = ["thor" , "spiderman"  ,"ironman"]
var heroes = [1, 2, 3];
heroes.map(function (hero) {
    // return 2  //it also valid
    return " hero is ".concat(hero); //here no need to declare that hero is a string or anything because ts is smart beacause in array we give string or num then  function also be string or num or any data type we write in array
});
function consoleERR(erroemsg) {
    console.log(erroemsg);
}
function handleERR(erroemsg) {
    throw new Error(erroemsg);
}
var getHello = function (s) { return "hello"; };
