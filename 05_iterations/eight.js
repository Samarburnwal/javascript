const myNums = [1,2,3]

const initialValue = 0;

const myTotal = myNums.reduce((accumulator,currentVal)=>{
    return accumulator+currentVal;
},initialValue);

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalAmount = shoppingCart.reduce((acc,elem)=>{
    return acc + elem.price;
},0)

console.log(totalAmount);
