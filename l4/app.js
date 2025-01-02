// function return type
function add(num1, num2) {
    return num1 + num2;
}
// console.log( add(1,2))
function greet1(name) {
    // console.log(`hi ${name}`)
    return "hii ".concat(name);
}
function greet(name) {
    console.log("hi ".concat(name));
    // return `hii ${name}`
}
// console.log(greet("om"))
var combineFunction;
// combineFunction = 10 //invalid  we can add only function
// combineFunction = add;
// console.log(combineFunction(1,2))
// combineFunction = greet1;
// console.log(combineFunction("om")) //this are valid
// function  and callbacks
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(1, 2, function (result) {
    console.log(result);
});
