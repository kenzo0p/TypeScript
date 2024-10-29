let greetings: string = "hello om";
console.log(greetings);
let myNum = 4
greetings.toLowerCase()

export { }//we use this for temporary removing error




//number
let userId =334466//this is the best practice bcoz ts automaticcaly give the type 
let userid :number =334466.873264

//boolean 
let isLoggedIn:boolean = true; 

//any

// let hero; //if we want to throw any as error then change compiler settings to noImplicitAny
let hero:string;

function gethero(){
    return "thor"
    // return true
}
hero = gethero() //here hero is any it means we can return any type of value
