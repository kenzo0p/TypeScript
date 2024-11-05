"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const om = new User("om@om.com", "om");
om.city = "pune";
