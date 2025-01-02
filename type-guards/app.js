"use strict";
// console.log("type guards")
function add(a, b) {
    // add type guards
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(10, 20));
console.log(add("10", 20));
const emp1 = {
    name: "om",
    prevelages: ["create-server"],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log("name : ", emp.name);
    // console.log("previllages" , emp.prevelages)
    // start adding type guards
    // if(typeof emp === "string" ){
    //     console.log(emp.prevelages)
    // } // wrong code
    // use in keyword that build in js
    if ('prevelages' in emp) {
        console.log(emp.prevelages);
    }
}
printEmployeeInformation(emp1);
class Car {
    drive() {
        console.log("driving a car");
    }
}
class truck {
    drive() {
        console.log("Driving a truck");
    }
    loadCargo(amount) {
        console.log("loading cargo....", amount);
    }
}
const v1 = new Car();
const v2 = new truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(500);
    }
}
useVehicle(v1);
useVehicle(v2);
// type casting || type assertion
// const userInput = <HTMLInputElement>document.getElementById('user-input');
const userInput = document.getElementById('user-input');
userInput.value = "hii om";
