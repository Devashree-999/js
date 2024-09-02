let arr=[3,6,5,8,1,2]
// let sum=0
// for(let i of arr){
// sum=sum+i
// }
// console.log(sum);
let sum=arr.reduce((a,b,c,d)=>{
  return a+b  
})// a= value of 0 index, b=values from index 1 to n, c=index values, d=array itself