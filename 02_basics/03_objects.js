//singleton => when make an object by constructor not by literals
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Samar",
    age: 20,
    "email": "sam@email.com",
    "phone no" : 9090909090,
    isLoggedIN: false,
    lastLoginDays: ["Monday","Tuesday"],
    [mySym]:"mysym1"
}

console.log(JsUser.email) //This method cant be used if we declare our key as a string where we have space
// console.log(JsUser.phone no) to access this key we have to use the second method
console.log(JsUser["phone no"])
console.log(JsUser["email"]) 

//If we want to use a symbol as our key then we have to write it in square brackets

JsUser.email = "sam@netflix.com"

// Object.freeze(JsUser); //It freezes the object for change

JsUser.email = "sam@amazon.com"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user!");
}

// console.log(JsUser.greeting())//In console we are getting undefined because there is no name of the function of the name is given

// console.log(JsUser.greeting) //Since we dont used the parenthesis therefore we will get the function return back the funtion is not executed yet

JsUser.greetingTwo = function(){
    console.log(`Hello, JS user ${this.name}`)
}

JsUser.greetingTwo()