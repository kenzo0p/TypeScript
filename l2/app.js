// object, arrays , tupple, enum
var person = {
    firstname: "john",
    age: 21,
    skills: ["js", "ts", "react"],
};
console.log(person.skills[0]);
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
var person1 = {
    firstname: "john",
    age: 21,
    skills: ["js", 10],
    role: Role.ADMIN,
};
