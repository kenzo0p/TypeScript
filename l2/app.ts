// object, arrays , tupple, enum
// const person: {
//   firstname: string;
//   age: number;
//   skills: string[];
// } = {
//   firstname: "john",
//   age: 21,
//   skills: ["js", "ts", "react"],
// };

// console.log(person.skills[0]);

// tupple

// person1.skills = ["react",21]
// person1.skills[0] =12  //invalid

// enum

// const person1: {
    //     firstname: string;
    //     age: number;
    //     skills:[string,number] //fixed array of types,
    
    // } = {
        //     firstname: "john",
        //     age: 21,
        //     skills:['js',10],
        //
        
        // };
enum Role {
    ADMIN,
    AUTHOR,
    READ_USER_ONLY,
}

const person1 = {
  firstname: "john",
  age: 21,
  skills: ["js", 10],
  role: Role.ADMIN,
};
