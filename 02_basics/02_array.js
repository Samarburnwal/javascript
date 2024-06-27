const marvelHeroes = ["IronMan","Thor","SpiderMan"]
const dc_heroes = ["Superman","Batman","Flash"]

//marvelHeroes.push(dc_heroes) //It pushes the whole data inside the array as a single element. Therefore on printing the the array we get array at the position of 3

//const allHeroes = marvelHeroes.concat(dc_heroes) //It adds the provide array into the marvelHeroes array and return a new array 

//console.log(allHeroes)

const allNewHeroes = [...marvelHeroes,...dc_heroes]// the ... spreads the whole element of the array

const anotherArray = [1,2,3,[4,5],6,7,[6,2]]

const new_org_arr = anotherArray.flat(2) // It removes all the nested array and all the elements inside that array is simply put into the array

console.log(new_org_arr)

console.log(Array.from("Samar")) //It Converts the data provided inside the parenthesis into a array. They are used in data scraping

console.log(Array.from({name:"Samar"})) // If the from method cant convert the given data into an array then it returns an empty array

let match1 = 123
let match2 = 153
let match3 = 149

console.log(Array.of(match1,match2,match3))