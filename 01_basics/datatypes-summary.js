//Primitive

// 7 types : String, Number, Boolean, NULL, undefined, Symbol, Big Int


const id = Symbol('123')

const id2 = Symbol('123')

console.log(id === id2)

// Reference (Non primitive)

// Array, Objects, Function

// Javascript is a dynamically typed language

const heroes = ['Nagraj','Inspector Steel','Dhruv','Shaktiman']

let myObj = {
    name:"samar",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(myFunction())

//type of myFunction is object function
 

// * Premitive Datatypes

//                   Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined


// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)


//*************************************************************

//Stack (Primitive), Heap (Non-Primitive)

// In stack we always get a copy of variables .
// Here is an example 

let var1 = '123'
let var2 = var1
// Here we copied the value of var1 into var2
console.log(var1)
console.log(var2)
var2 = '345'
//Now we changed thew value of var2 but the value in var1 will remain same as in stack variables get copied not given reference
console.log(var1)
console.log(var2)

//In case of Non-Primitive datatypes 

let obj1 = {
    email: "sam@google.com",
    upi: "2341@ybl"
}

let obj2 = obj1

//here the value of obj1 is not copied , reference of obj1 is stored in obj2
// If we change the value in obj2 then the actual value will also change

obj2.email = "samixel@gmail.com"

console.log(obj1.email)
console.log(obj2.email)