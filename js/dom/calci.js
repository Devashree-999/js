let button=document.querySelectorAll('button')
let ip=document.querySelector('input')
for( let btn of button){
    btn.addEventListener('click',()=>{
        let text=btn.innerText
        console.log(text);
        if(text==='c'){
            ip.value=''
        }
        else if(text==='='){
            ip.value=eval(ip.value)
        }
        else{
            ip.value=ip.value+text
        }
    })
}