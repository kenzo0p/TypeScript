"use strict";
// classess
class Department {
    constructor(n) {
        this.name = "om";
        this.name = n;
    }
    describe() {
        console.log("department name ", this.name);
    }
}
const accounting = new Department("accounting");
accounting.describe();
const accountingCopy = {
    describe: accounting.describe
};
console.log(accountingCopy);
// access modifiers in classess
// public
// private
// protected
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    getAge() {
        return this.age;
    }
    getName() {
        return this.name;
    }
}
class Manager extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getManagerName() {
        return super.getName();
    }
}
const manager = new Manager("om", 33, 5000);
console.log(manager.getManagerName());
//   readonly
class Person {
    constructor(name) {
        this.name = name;
    }
}
const person = new Person("om");
console.log(person.name);
// static method
class Student {
    static getAge() {
        return 25;
    }
}
const student = Student.getAge(); //here no need to create object because we can access static method without creating object (new keyword)
console.log(student);
// abstract class 
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea());
