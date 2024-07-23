const promiseOne=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("Task Compeleted");
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("task executed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async waited 2");
        resolve();
    },2000)
}).then(function(){
    console.log("Task Executed 2");
})

fetch('https://github.com/public-apis/public-apis')
.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})