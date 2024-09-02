let form=document.querySelector('form')
let ip=document.querySelector('input')
let ul=document.querySelector('ul')
let arr=[]
let i=0
let li
create()
function create(params) { 
    li=document.createElement('li')
ul.append(li)
}            
console.log(ul);
form.addEventListener('submit',(a)=>{
    a.preventDefault()
    create()
   li.innerText=ip.value  
   ip.value=''  
   li.addEventListener('click',()=>{
    li.remove()
   }) 
})

