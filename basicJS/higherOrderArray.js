// const map=new Map();

// map.set('IN',"India");
// map.set('US',"America");
// map.set('NZ',"New Zealand");
// //console.log(map);
// for(const[key,value] of map){
//     console.log(key," :- ",value);
// }

// const myObj={
//     js:"Javascript",
//     cpp:"C++"
// }
// for(const key in myObj){
//     //console.log(`${key} :- ${myObj[key]}`);
// }

//forEach never return the value.
//const coding=['js','cpp','java','c']
// coding.forEach(function(val){
//     console.log(val);
// })
// coding.forEach((val)=>{
//     console.log(val);
// })
// coding.forEach(print);
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
// function print(item)
// {
//     console.log(item);
// }

const ArrayObj=[
    {
        name:'A',
        age:8
    },
    {
        name:'B',
        age:9
    },
    {
        name:'C',
        age:10
    }
]
ArrayObj.forEach((val)=>{
    console.log(val.name,val.age);
})