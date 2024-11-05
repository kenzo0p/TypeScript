"use strict";
// class User {
//     email: String
//     name: String
//     private readonly city: String = ""
//     constructor( email: String, name: String, city: String) {
//         this.email = email;
//         this.name = name;
//         this.city = city;
//     }
// }
// const om = new User("om@om.com", "om", "pune")
// class User {
//     // email: String
//     // name: String
//     private readonly city: String = ""
//     constructor( public email: String,public name: String, city: String) {
//         this.email = email;
//         this.name = name;
//         this.city = city;
//     }
// }
// const om = new User("om@om.com", "om", "pune")
class User {
    constructor(email, name, city) {
        this.email = email;
        this.name = name;
        // email: String
        // name: String
        this._courseCount = 1;
        this.city = "";
        this.email = email;
        this.name = name;
        this.city = city;
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getApplEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        5;
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than one");
        }
        this._courseCount = courseNumber;
    }
}
const om = new User("om@om.com", "om", "pune");
// om.deleteToken()
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
