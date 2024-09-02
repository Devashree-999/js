// function step1(a){
//     setTimeout(()=>{
//         console.log('photo selected');
//         a()
//     },5000)
  
// }
// function step2(a){
//     setTimeout(()=>{
//         console.log('apply filter');
//         a()
//     },4000)
  
// }
// function step3(a){
//     setTimeout(()=>{
//         console.log('caption');
//         a()
//     },3000)

// }
// function step4(){
//     setTimeout(()=>{
//         console.log('posted');
//     },2000)
// }
// step1(()=>step2(()=>step3(()=>step4())))


//promise

// let promise= new Promise((res,rej)=>{
//     let a=prompt("enter a")
//     // res()
//     // rej()
//     // setTimeout(()=>{
//     //     res()
//     // },5000)
//     // setTimeout(()=>{
//     //     rej()

//     // },2000)

//     if(a%2==0)
//         res('res')
//     else
//     rej("notresolved")
// })
// // console.log(promise);
// promise.then((a)=>{
//     console.log(a);
//     // console.log('resolved');
// }).catch((err)=>{                      // then for resolved code and catch for rejected code
//     // console.log('rejected');
//     console.log(err);
// })

let step1=function(){
    return new Promise((res,rej)=>{
        res('photo is selected')
        
    },5000)
}
let step2=function(){ 
    return new Promise((res,rej)=>{
    res('photos are filtered')
},3000)
}
// step1().then((result)=>{
//     console.log(result);
//     return step2().then((result)=>{
//         console.log(result);
//     })
// }) 

// async await
async function Await(){
let data= await step1()
console.log(data);
let data1= await step2()
console.log(data1);
}
Await()


