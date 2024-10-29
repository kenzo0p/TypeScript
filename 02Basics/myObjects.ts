const User = {
    name:"om",
    email:"o@o.com",
    isActive:true
}





function createUser({name:string , isPaid:boolean}){}

let newUser = {name:"om" ,isPaid:true , email:"o@o.com"}

// createUser({name:"om" ,isPaid:true , email:"o@o.com"})//it gives an error beacuse email is not there
createUser(newUser)//but it didn't throw an error ,we can pass more values in it

function createCourse():{name:string , price:number}{
    return {name:"typeScript" ,price:333}
}


export {}