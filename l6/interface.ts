// interface 
// console.log("interface hii ")

interface User {
    name: string;
    age: number;
    sayHi(): void;
}

const user : User ={
    name:"om",
    age:20,
    sayHi() {
     console.log(`hii ${this.name}`)   
    }
}

console.log(user.sayHi())