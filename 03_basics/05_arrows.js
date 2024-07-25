const user = {
    username:"Samar",
    price:999,

    welcome: function(){
        console.log(this) //this -> refers to the self object
        console.log(this.username)
    }
}

// user.welcome //It doesn't call the function welcome

//user.welcome() // It will call the function correctly
const usern = "Samar"
//console.log(this) //since we are using an isolated browser engine named node js so ther is no element in our referencing object "this" but if we try to console.log(this) at the console section of website then we will get very much data

// function chai(){
//     console.log(this) //It will give some data about the function
// }
// chai()

// const chai = function(){
//     console.log(this)
// }
// chai()

// const chai = () => {
//     console.log(this) // It will give an empty object everytime in case of arrow function
// }

// chai()

// const mult = (num1,num2)=>{
//     return num1*num2
// }
//It is called explicit return
// console.log(mult(3,4))

// const addTwo = (num1,num2) => num1+num2 // It return implicitally num1+num2
// //const addTwo = (num1,num2) => (num1+num2) // It return implicitally num1+num2

// console.log(addTwo(3,4))

//Now if we want to return any object implicitally

const chai = () => ({username:"Raja"})

console.log(chai())