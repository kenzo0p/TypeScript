// const User = {
//     name:"om",
//     email:"o@o.com",
//     isActive:true
// }





// function createUser({name:string , isPaid:boolean}){}

// let newUser = {name:"om" ,isPaid:true , email:"o@o.com"}

// // createUser({name:"om" ,isPaid:true , email:"o@o.com"})//it gives an error beacuse email is not there
// createUser(newUser)//but it didn't throw an error ,we can pass more values in it

// function createCourse():{name:string , price:number}{
//     return {name:"typeScript" ,price:333}
// }




// type alias
// type User = {
//     name:string;
//     email:string;
//     isActive:boolean

// }


// type myString  =string;//we can change data types name by using type alises

// function createUser(user:User):User{
//     return {name:"" , email:"", isActive:true}
// }
// createUser({name:"" , email:"", isActive:true});






//ReadOnly and optional
type User = {
    readonly _id: String,//we can,t manipulate this bu using readonly that means we cant change it 
    name: String,
    email: string,
    isActive: boolean
    credCardDetails?: number
}

type cardNumber = {
    cardnumber: string,

}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    CVV: number
}

let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false,
}

myUser.email = "h2gmail.com"
// myUser._id = "asdyhyvc"//error due to readonly

export { }