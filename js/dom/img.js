console.log($);
let img=$('img')
let j=0
let arr=['arijitalbum.jpg','bag.jpg','bg1.jpg']
setInterval(()=>{
img.attr('src',arr[j])
j=(j+1)% arr.length
},1000)