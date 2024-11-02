interface User {
    email: String,
    userId: Number,
    googleId ?: String,
    readonly dbId:Number,
    // startTrail:() =>string
    startTrail():String,
    getCoupon(couponName:string , value:number):number,

}
interface User{
    githubToken:String
}
const om: User = { dbId: 123, email: "om", userId: 2211 ,startTrail: ()=>{
    return "trail started"
},
getCoupon:(name:"om" ,off:10)=>{
    return 10
},
githubToken:"github"
}
const om2: Admin = {role:"admin", dbId: 123, email: "om", userId: 2211 ,startTrail: ()=>{
    return "trail started"
},
getCoupon:(name:"om" ,off:10)=>{
    return 10
},
githubToken:"github",

}

// om.dbId=33



interface Admin extends User{
    role:"admin" | "ta" | "learner",

}