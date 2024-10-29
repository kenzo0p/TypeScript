"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "om",
    email: "o@o.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "om", isPaid: true, email: "o@o.com" };
// createUser({name:"om" ,isPaid:true , email:"o@o.com"})//it gives an error beacuse email is not there
createUser(newUser); //but it didn't throw an error ,we can pass more values in it
function createCourse() {
    return { name: "typeScript", price: 333 };
}
