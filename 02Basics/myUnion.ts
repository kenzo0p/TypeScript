//union in data type

let score: number | string = 33;

score = 44;
score = "55";


type User = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}

let om: User | Admin = {
    name: "om", id: 334
}
om = { username: "hc", id: 334 }


// function getDbId(id:number | string){
//     //making some api calls
//     console.log(`db id is:${id}`);
// }
getDbId(3)
getDbId("3")
export { }

function getDbId(id: number | string) {
    // id.toLowerCase()//it will give an error without if else condition
    if (typeof id === "string") {
        id.toLowerCase;//if number is in string
    }
    else {
        id + 2;//just for example that its number
    }
}



//array

// const data1:number[]=[1,2,3,4,"5"];
// const data2:string[]=[1,2,3,4,"5"];
// const data3:number[] | string[]=[1,2,3,4,"5"];//not allowed also 
const data4:(number | string | boolean)[]=[1,2,3,4,"5" ,true];//this is allowed



let pi:3.14 =3.14
// pi=3.145;//not allowed

let seatAllotment:"aisle"|"middle"|"window"
seatAllotment="aisle";
// seatAllotment="crew"//not allowed
