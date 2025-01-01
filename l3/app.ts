console.log("hii union");

// union
// literal types
// types aliies
// let firstname :string = "om"

const person : { firstname: string, age: number } = {
  firstname: "om",
  age: 22,
};

// | -> pipe : union we can assign multiple types using pipes

// function combine(num1:number | string , num2:number | string){
//     let result;
//     if(typeof num1 === 'number' && typeof num2 === 'number' ){
//         result  = num1 + num2
//     }else {
//         result = num1.toString() + num2.toString()
//     }
//     return result

// }

// console.log(combine(1 , 2))


//! LITERAL TYPES khudka type banate hain

// function combine(num1:number | string , num2:number | string , conversationType:"as-number" | "as-string"){
//     let result;
//     if(typeof num1 === 'number' && typeof num2 === 'number' || conversationType === "as-number"){
//         result  = +num1 + +num2
//     }else {
//         result = num1.toString() + num2.toString()
//     }
//     return result
// }
// const sum1=combine(10,20 , "as-number")
// // const sum2 = combine(10,59 , "as-number")
// // const combineName = combine("om" , "mern" , "as-string")
// console.log(sum1)



// type alias / custom types
type combinable = number | string | boolean | string []

function combine(num1:combinable , num2:combinable , conversationType:"as-number" | "as-string"){
    let result;
    if(typeof num1 === 'number' && typeof num2 === 'number' || conversationType === "as-number"){
        result  = +num1 + +num2
    }else {
        result = num1.toString() + num2.toString()
    }
    return result
}
const sum1=combine(10,20 , "as-number")
// const sum2 = combine(10,59 , "as-number")
// const combineName = combine("om" , "mern" , "as-string")
console.log(sum1)

type user ={
    name :string,
    age:number
    skills:string[]
}
const user :user = {
    name:"om",
    age:20,
    skills : ["react" , "node"]
}

function greet(user:user){
    console.log("hii i am om" ,user.name)
}


