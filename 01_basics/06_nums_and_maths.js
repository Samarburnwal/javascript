const score = 400

const balance = new Number(100)

// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(2)) // it returns u the value of balance to two precision or decimal points

const otherNum = 239.982

// console.log(otherNum.toPrecision(4)) //round of to 3 significant numbers

const hundreds  = 10000000
// console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-3))
console.log(Math.round(4.6))
console.log(Math.floor(4.9))
console.log(Math.floor(4.2))

console.log(Math.random()) //It gives value from 0 to 1
console.log((Math.random(4.9)*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min)
