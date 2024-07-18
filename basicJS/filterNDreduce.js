//const arr=[1,2,3,4,5,6,7,8];
//filter return values
// const a=arr.filter((val)=> val>3)
// console.log(a);
//map using it retun vakue automaticaly

// const x=arr.map((num)=> num+10)
// console.log(x);
// const y=arr.map((num)=> {return num+12})//deu to scope"{}" we using return
// console.log(y);

//Reduce function

const ShopingCart=[
    {
        item:"Shoes",
        price:1299,
    },
    {
        item:"Tablet",
        price:31299,
    },
    {
        item:"Watch",
        price:2599,
    },
    {
        item:"Mobile",
        price:12999,
    }
]

const totalCost=ShopingCart.reduce((acc,item)=>acc+item.price,0);
console.log(totalCost);