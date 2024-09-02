let arr=['bag.jpg','bg1.jpg','arijitalbum.jpg']
let j=0
let img=document.querySelector('img')
setInterval(()=>{
img.setAttribute('src',arr[j])
j=(j+1)% arr.length
},1000)
// while(1){
//     img.setAttribute('src',arr[j])
//     j=(j+1)% arr.length 
// }