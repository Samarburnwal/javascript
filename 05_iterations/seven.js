const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const myNums = myNumbers.map((num)=> num+10);
const myNums1 = myNumbers.map((num)=> num>4);

console.log(myNums);
console.log(myNums1);

const specialNums = myNumbers
                    .map((elem)=> elem+10)
                    .filter((elem)=>elem>=14)
                    .map((e)=> e*10);
//Chaining of map filter
console.log(specialNums);