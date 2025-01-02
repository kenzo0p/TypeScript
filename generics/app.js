"use strict";
// generics
const fruits = ["apple", "banana", "orange"];
fruits.push("om");
console.log(fruits);
const Boy = {
    name: "Shiva",
    age: 21,
};
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
console.log(merge({ name: "om" }, { role: "sde-1" }));
function createObject(key, value, isActive) {
    return { key, value, isActive };
}
console.log(createObject("om", 10, true));
const response = { data: "success", status: 200 };
const jresponse = { data: { key: "value" }, status: 200 };
console.log(response);
console.log(jresponse);
// generic with classess
class Department {
    constructor(n) {
        this.name = n;
    }
    printName() {
        console.log(this.name);
    }
}
const newDep = new Department("IT");
newDep.printName();
// genric with array
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([1, 2, 3]));
// generic with keyOf
const person = { name: "om" };
function getValue(obj, key) {
    return obj[key];
}
console.log(getValue(person, "name"));
