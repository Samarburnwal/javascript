let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
score = "33abc"
valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

//"33" => 33
//"33abc" => NaN
//true => 1, false => 0

let names = "samar"
let toBoolean = Boolean(names)
console.log(toBoolean)
names = ""
toBoolean = Boolean(names)
console.log(toBoolean)

// "samar" => true
// "" => false

let nums = 33.5
let numToString = String(nums)
console.log(numToString)
console.log(typeof numToString)

let str1 = "hello"
let str2 = " Samar"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter; // It first increments then use its value
console.log(gameCounter);
gameCounter++; // It first uses the value and then increment it
console.log(gameCounter);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion