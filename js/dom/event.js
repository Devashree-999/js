// let btn=document.querySelector('button')
// function fun(){
//     console.log('heyy');
    
// }

// let btn=document.querySelector('button')
// btn.onclick=function(){
//  console.log('heyyyyyyy');
 
// }

// let btn= document.querySelector('button')
// btn.addEventListener('click',()=>{
//     console.log('heyyyyy');
    
// })

// let ip=document.querySelector('input')
// let div=document.querySelector('div')
// ip.addEventListener('input',(a)=>{
//     console.log(a.target.value);
//     div.innerText=a.target.value
// })

let form=document.querySelector('form')
let ip=document.querySelector('input')
let div=document.querySelector('div')
form.addEventListener('submit',(a)=>{
    a.preventDefault()
    console.log(ip.value);
    div.innerText=ip.value
// console.log('hyy');

})