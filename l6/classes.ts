// classess
class  Department  {
    name = "om"  
       constructor(n:string){
        this.name  = n
     }
     describe(){
        console.log("department name ", this.name)
     }
}

const accounting = new Department("accounting")
accounting.describe();
const accountingCopy = {
    describe:accounting.describe
}

console.log(accountingCopy)


// access modifiers in classess

// public
// private
// protected

class Employee {
    private name: string;
    protected age: number;
    public salary: number;
    
    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    private getSalary(): number {
        return this.salary;
    }
    public getAge(): number {
        return this.age;
    }
    protected getName(): string {
        return this.name;
    }
}
class Manager extends Employee {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }
    public getManagerName(): string {
        return super.getName();
    }
}
const manager = new Manager("om", 33, 5000);
console.log(manager.getManagerName());
//   readonly

class Person {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("om");

console.log(person.name);


// static method

class Student {
    static getAge(): number {
        return 25;
    }
}
const student = Student.getAge(); //here no need to create object because we can access static method without creating object (new keyword)
console.log(student); 

// abstract class 
abstract class Shape {
    abstract getArea(): number;
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }

  const rectangle = new Rectangle(10, 20);
  console.log(rectangle.getArea());
