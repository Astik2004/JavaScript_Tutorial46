const user={
    uname:"Astik",
    price:200,
    welcomemeg:function(){
        console.log(`${this.uname},welcome to website`);//this tell about current context
        //console.log(this);
    }
}
// user.welcomemeg();
// user.uname="Yadav";
// user.welcomemeg();
// console.log(this);

// const sum=()=>{
//     const uname="astik";
//     console.log(this);
// }
// sum();
//Arrow function***************
// const sum=(n1,n2)=>{
//     return n1+n2;
// }

//Implicite return
const sum=(n1,n2)=> n1+n2;

console.log(sum(10,20));