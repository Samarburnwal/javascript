var myDate = new Date()
console.log(myDate) // Output 2024-06-25T18:40:25.548Z
console.log(myDate.toLocaleString()) // Output 6/25/2024, 6:41:53 PM
console.log(myDate.toISOString()) // Output 2024-06-25T18:42:42.350Z
console.log(myDate.getDate())
console.log(myDate.getUTCHours()) //Universal Time coordinated

// The datatype of date is object

//To add our custom date and time 

var myCreatedDate = new Date(2025,1,23,3,15) //The month counting starts from 0 in javascript JAN --> 0
var myCreatedDate1 = new Date("2025-1-23")
console.log(myCreatedDate1)

var myTimeStamp = Date.now() // it gives us the time passed after the date of 1st of jan in 1970

console.log(myTimeStamp) 

let newDate = new Date()

newDate.toLocaleString('default',{
    weekday: "long",
})
//We can change the display format also of toLocalString method