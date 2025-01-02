// generics

const fruits: Array<string> = ["apple", "banana", "orange"];
fruits.push("om");
console.log(fruits);
type Person = {
  name: string;
  age: number;
};
const Boy: Person = {
  name: "Shiva",
  age: 21,
};

function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

console.log(merge({ name: "om" }, { role: "sde-1" }));

function createObject<T extends string, U extends number, V extends boolean>(
  key: T,
  value: U,
  isActive: V
) {
  return { key, value, isActive };
}

console.log(createObject("om", 10, true));

// generic default

interface User<T = string> {
  data: T;
  status: number;
}

const response: User = { data: "success", status: 200 };

const jresponse: User<object> = { data: { key: "value" }, status: 200 };

console.log(response);
console.log(jresponse);

// generic with classess

class Department<T> {
  name: T;
  constructor(n: T) {
    this.name = n;
  }

  printName(): void {
    console.log(this.name);
  }
}

const newDep = new Department<string>("IT");
newDep.printName();

// genric with array

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst([1, 2, 3]));

// generic with keyOf
const person = { name: "om" };

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(person, "name"));
