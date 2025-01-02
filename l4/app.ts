// function return type

function add(num1: number, num2: number):number{
    return num1 + num2;
}

// console.log( add(1,2))

function greet1(name:string):string{
    // console.log(`hi ${name}`)
    return `hii ${name}`
}
function greet(name:string):void{
    console.log(`hi ${name}`)
    // return `hii ${name}`
}

// console.log(greet("om"))
let combineFunction :Function;
// combineFunction = 10 //invalid  we can add only function

// combineFunction = add;
// console.log(combineFunction(1,2))
// combineFunction = greet1;
// console.log(combineFunction("om")) //this are valid


// function  and callbacks

function addHandle(num1:number , num2:number , cb:(n:number) => void){
    const result = num1 +num2
    cb(result)
}

addHandle(1,2 ,(result:number) => {
    console.log(result)
})

export {}