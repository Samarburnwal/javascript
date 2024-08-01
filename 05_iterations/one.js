// for (let ind = 0; ind < 10; ind++) {
//     const element = ind;
//     if(ind == 7){
//         console.log("Thala For A Reason")
//     }
//     console.log(ind)
// }

//ctrl + d for selecting duplicates

//Nested loops

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i + " * " + j + " = "+i*j)
//     }
// }

let myArr = ["Deadpool","Wolverine","Superman"]

// for(let i=0;i<myArr.length;i++){
//     const element = myArr[i];
//     console.log(element)
// }

//break and continue

// for(let i=1;i<=20;i++){
//     if(i == 5){
//         console.log("5 is detected")
//         break
//     }
//     console.log(`value of i is ${i}`)
// }

for(let i=1;i<=20;i++){
    if(i == 5){
        console.log("5 is detected")
        continue
    }
    console.log(`value of i is ${i}`)
}