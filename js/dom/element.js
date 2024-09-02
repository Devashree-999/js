let div= document.querySelector('div')
let p= document.createElement('p')
p.innerText='heloo, how are you?'
let h1= document.createElement('h1')
h1.innerText='hello'
let att1= document.createAttribute('class')
att1.value='at'

div.append(p,h1) //append used for adding more than one tag
// div.appendChild(p) //append child used for adding only one tag
// p.remove()
console.log(div);
