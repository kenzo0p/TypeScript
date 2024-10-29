function addTwo(num:number):number{ //by giving type to the function it cant only accept number beacause of this problem
    
    return num + 2;
    // return "hello"
}

function getUpper(val:string){
    return val.toUpperCase()
}
getUpper("om");
addTwo(5);
// let myValue = addTwo(5)



function signUpUser(name:string,email:string,password:string ,isPaid:boolean){}
let logInUser = (name:string , email:string,isPaid:boolean =false) =>{}
logInUser("om" ,"o@o.com")
signUpUser("om" ,"h@c.com", "823y" ,true);


function getValue(val:number){
    if(val>5){
        return true  // if these case comes then use like this were we can acces two types of data then use normal function
    }
    return "200 OK"
}


// const heroes  = ["thor" , "spiderman"  ,"ironman"]
const heroes  = [1 , 2  ,3]

heroes.map((hero) =>{
    // return 2  //it also valid
    return ` hero is ${hero}`;//here no need to declare that hero is a string or anything because ts is smart beacause in array we give string or num then  function also be string or num or any data type we write in array
})



function consoleERR(erroemsg:string):void{
    console.log(erroemsg);
}


function handleERR(erroemsg:string):never{
    throw new Error(erroemsg);
}




const getHello  =(s:string):string =>{return "hello"}

export {}

//1.15