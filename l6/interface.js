"use strict";
// interface 
// console.log("interface hii ")
const user = {
    name: "om",
    age: 20,
    sayHi() {
        console.log(`hii ${this.name}`);
    }
};
console.log(user.sayHi());
