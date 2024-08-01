const coding = ['Python','JavaScript','C++','Ruby'];

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        nameOFLang:"JavaScript",
        extension:"js"
    },
    {
        nameOFLang:"Python",
        extension:"py"
    },
    {
        nameOFLang:"Java",
        extension:"java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.nameOFLang,item.extension);
})