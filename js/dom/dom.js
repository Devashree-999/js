// console.log(document);
// let button=document.getElementById('one')
// let button=document.getElementsByClassName('btn')
// let button=document.querySelector('#one')
// console.log(button);

// let head1=document.querySelectorAll('h1')
// console.log(head1);
// let arr=[head1.length]
// let j=0
// for(let i of head1){
// arr[j]=i
// j++
// }
// // for(let i of head1){
// // i.style.color='red'
// // }
// arr.filter((x,y)=>{
//    if(y%2==0){
//     x.style.color='red'
//    }
//    else
//    x.style.color='green'
// })
let head=document.getElementsByName('h1')
console.log(head);
let a=document.querySelector('a')
a.setAttribute('href','http://amezon.com')
console.log(a.getAttribute('href'));