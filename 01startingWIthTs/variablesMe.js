"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "hello om";
console.log(greetings);
var myNum = 4;
greetings.toLowerCase();
//number
var userId = 334466; //this is the best practice bcoz ts automaticcaly give the type 
var userid = 334466.873264;
//boolean 
var isLoggedIn = true;
//any
// let hero; //if we want to throw any as error then change compiler settings to noImplicitAny
var hero;
function gethero() {
    return "thor";
    // return true
}
hero = gethero(); //here hero is any it means we can return any type of value
