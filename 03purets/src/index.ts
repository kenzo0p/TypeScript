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
    // email: String
    // name: String

    protected _courseCount = 1

    private readonly city: String = ""
    constructor(public email: String, public name: String, city: String) {
        this.email = email;
        this.name = name;
        this.city = city;
    }
    private deleteToken() {
        console.log("Token Deleted")
    }
    get getApplEmail(): string {
        return `apple${this.email}`
    }
    get courseCount(): number {
        return this._courseCount
    }
    set courseCount(courseNumber) {
        5
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than one")
        }
        this._courseCount = courseNumber
    }
}

const om = new User("om@om.com", "om", "pune")

// om.deleteToken()


class SubUser extends User {
    isFamily:boolean =true

    changeCourseCount(){
        this._courseCount = 4
    }
}