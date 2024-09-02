// let arr1=[1,6,4,8,2,0,3]
// arr1.forEach((x,y,z)=>{
//     console.log(x); //elements
//    // console.log(y); // index
//    // console.log(z); //array itself
// })

// //in this we can return
// let arr2=[1,7,4,5,6,9]
// let new2 = arr2.map((x,y,z)=>{
// return y
// })

// console.log(new2);

// //in this we can filter
// let arr3=[3,2,5,6,8]
// let new3=arr3.filter((x,y,z)=>{
//     //return z<6
//     return (x%2===0)
// })
// console.log(new3);

//it only prints one valueand will not check the whole array
// let arr4=[4,5,3,7,2]
// let new4=arr4.find((a)=>{
//     return a%2!=0
// })
// console.log(new4);

// let data=[
//     {
//         id:1,
//         name:'happy'
//     },
//     {
//         id:2,
//         name:'semi'
//     },
//     {
//         id:3,
//         name:'yeti'
//     }
// ]
// data.map((a)=>{
//     console.log(a);
//     // console.log(a.id);
//     // console.log(a.name);
// })
// let newd=data.filter((a)=>{

//     return a.id>1
// })
// newd.map((a)=>{
//     console.log(a.name);
// })
// // console.log(newd);

// let arr=[4,7,12,65,9,16,24,1,6,17,19,20,18]
// let newarr=arr.filter((a)=>{
//     return a>2
// })
// console.log(newarr);
// let new2=newarr.filter((a)=>{
//     return a%2!=0
// })

// console.log(new2);
// let sum=new2.reduce((a,b)=>{
//     return a+b
// })
// console.log(sum);

let num=Math.random()*10//random num between 0 to 10
let temp=Math.floor(num)*50
console.log(Math.floor(num));
console.log(temp);
// let date=new Date().toLocaleDateString()
// console.log(date);
// let time=new Date().toLocaleTimeString()
// console.log(time);