//object with function
function sum(a){
    console.log(`${a.name} ${a.lastName}`);
}
 let obj={
    id:2,
    name:"deva",
    lastName:'shree'
 }
 sum(obj)

 //object
 var a={
    id:1,
    name:'tiwari',
    lastName:'vinayak',
    isPass:true
 }
 console.log(`${a.lastName} is pass ${a.isPass}`);
//obj in function
 function cal(num1,num2){
    let obj={
        sum:num1+num2,
        sub:num1-num2,
        mul:num1*num2
    }
    return obj
 }
 let res=cal(5,2)
 console.log(res);
 console.log(res.sum);
 
 // function in obj
 let objj={
   a:10,
   b:30,
   sum:function(){
      console.log('sum=');
      return this.a+this.b 
   }
 }
 console.log(objj.sum());