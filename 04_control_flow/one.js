// const isUserLoggedIn = true;
// const temp = 41;

// if(isUserLoggedIn){
//     console.log("Yes user logged in");
// }

// if(temp < 50) {
//     console.log("Temperature is greater than 50");
// } else if(temp < 75) {
//     console.log("Temperature is lesser than 75");
// }

// <, >, <=, >=, ==, ===, !==, !=

// const score = 2000;

// if(score > 500){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

//console.log(`User power ${power}`); //It will give error because the scope of power is inside the if condition

//If we change the datatype of power from const to var then this error will not occur because the var scope is global

// const balance = 1000;

// if(balance < 500){
//     console.log("test");
// } else if(balance < 750){
//     console.log("test2");
// } else if(balance < 1000){
//     console.log("test3");
// }else{
//     console.log("test4");
// }

const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

const loggedInFromEmail = true;
const loggedInFromGoogle = false;

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}