// console.log("type guards")


type combinable = number | string
type numeric = number | boolean
type Universal  = number & string
function add(a:combinable , b:combinable){
    // add type guards
    if(typeof a === "string" || typeof b === "string"){
            return a.toString() + b.toString()
    }
    return a + b  ;
}

console.log(add(10,20))
console.log(add("10",20))

// 2.
type admin = {
    name:string,
    prevelages : string[],

}

type employee = {
    name:string,
    startDate :Date
}

type elevatedEmloyee = admin & employee
type unknownEmp = employee | admin
const emp1 : elevatedEmloyee ={
    name:"om" , 
    prevelages : ["create-server"],
    startDate : new Date()
}

function printEmployeeInformation(emp:unknownEmp) {
    console.log("name : " , emp.name )
    // console.log("previllages" , emp.prevelages)

    // start adding type guards

    // if(typeof emp === "string" ){
    //     console.log(emp.prevelages)
    // } // wrong code

    // use in keyword that build in js
    if ('prevelages' in emp) {
        console.log(emp.prevelages)
    }
}

printEmployeeInformation(emp1)

class Car {
    drive() {
        console.log("driving a car")
    }
}

class truck {
    drive(){
        console.log("Driving a truck")
    }
    loadCargo(amount:number){
        console.log("loading cargo...." , amount)
    }

} 
type vehicle = Car | truck

const v1 = new Car()
const v2 = new truck()

function useVehicle(vehicle : vehicle) {
    vehicle.drive();

    if('loadCargo' in vehicle) {

        vehicle.loadCargo(500);
    }
}

useVehicle(v1)
useVehicle(v2)

// type casting || type assertion
// const userInput = <HTMLInputElement>document.getElementById('user-input');

const userInput = document.getElementById('user-input') as HTMLInputElement
userInput.value = "hii om"