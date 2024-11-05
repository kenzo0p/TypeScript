class User {
    email:String
    name:String
    city:String =""
    constructor(email :String , name:String  ){
        this.email = email;
        this.name = name;
    }
}

const om = new User ("om@om.com" , "om")
om.city = "pune"
