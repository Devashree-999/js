// let dataa=  [
//     {
//       "id": 1,
//       "name": "John Doe",
//       "email": "john.doe@example.com",
//       "age": 28,
//       "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "state": "CA",
//         "zip": "12345"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Jane Smith",
//       "email": "jane.smith@example.com",
//       "age": 32,
//       "address": {
//         "street": "456 Oak St",
//         "city": "Somewhere",
//         "state": "NY",
//         "zip": "67890"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Emily Johnson",
//       "email": "emily.johnson@example.com",
//       "age": 24,
//       "address": {
//         "street": "789 Pine St",
//         city: "Elsewhere",
//         "state": "TX",
//         "zip": "11223"
//       }
//     }
//   ]
//   let newd=dataa.map((a)=>{
//     console.log(a.address.city);
//   })
  
//call back function
// function outer(a){
//   console.log('hey');
//   a()
// }
// function inner(){
//   console.log('bye');
// }
// outer(inner)

//asynchronous programming
// setTimeout(()=>{
//   console.log('one');
// },5)
// console.log('two');
// console.log('three');
 
let id=setInterval(()=>{
  console.log('heyyyyy');
},500)
let i=0
while (i<=10) {
  if(i!=10)
    i++
  else
  clearInterval(i)
}
