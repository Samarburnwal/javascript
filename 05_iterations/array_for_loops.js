//for of

//[ "", "", ""]
//[ {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }

const greetings = "Hello World"

// for (const greet of greetings) {
//     console.log("Each character : "+greet)
// }

//Map

const map = new Map()

map.set('In','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('In','India') //map doesnot accept the duplicate key value

// console.log(map)

// for (const key of map) {
//     console.log(key);
// }

// [ 'In', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for (const [key,val] of map) {
    console.log(key+" => "+val);
}
// In => India
// USA => United States of America
// Fr => France

const myObj = {
    'game1':'NFS',
    'game2':'BGMI',
    'game3':'Doom Eternal'
}

// for (const [key,val] of myObj) {
//     console.log(key+" => "+val);
// } // It will throw error because object is not iterable