const name = "Samar"
const connections = 150

// console.log(name + connections) // Now developers doesnt use it much as it became outdated 
//Now they use Backticks
console.log(`Hello my name is ${name} and my linked connections are ${connections}`);

let name1 = new String("Samar") // Why we used [new] keyword here so that we can use string as an object, if we simply write String only then it will considered as a actual string

console.log(name1.length)
console.log(name1[0])
console.log(name1.toUpperCase()) // This will convert all lowercase characters to its uppercase characters but not actually changes the name1
console.log(name1)
console.log(name1.charAt(2))
console.log(name1.indexOf('a'))

const newStr = name1.substring(0,4)
console.log(newStr)

const anotherStr = name1.slice(-1,-4)
console.log(anotherStr)

const newString1 = "    Samar    "
console.log(newString1)
console.log(newString1.trim())

const url = "https://samar.com/samar%20burnwal"
console.log(url.replace('%20',''))
console.log(url)