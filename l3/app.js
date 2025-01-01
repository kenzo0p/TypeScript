console.log("hii union");
// union
// literal types
// types aliies
// let firstname :string = "om"
var person = {
    firstname: "om",
    age: 22,
};
function combine(num1, num2, conversationType) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number' || conversationType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine(10, 20, "as-number");
// const sum2 = combine(10,59 , "as-number")
// const combineName = combine("om" , "mern" , "as-string")
console.log(sum1);
var user = {
    name: "om",
    age: 20,
    skills: ["react", "node"]
};
function greet(user) {
    console.log("hii i am om", user.name);
}
