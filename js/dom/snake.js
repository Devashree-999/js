let canvas=document.querySelector('canvas')
let shape=canvas.getContext('2d')
// shape.fillRect(10,10,70,80)
// shape.clearRect(10,5,70,80)
shape.fillStyle='black'
let cell=30
let snake=[[0,0]]
let direction='right'
let GameOver=false
let score=0
let hs=0
let f=10
let foodCell=generateRandom()
let id=setInterval(()=>{
    draw()
    update()
 },200)

document.addEventListener('keydown',(e)=>{
    console.log(e);
    if(e.key==='Enter'){
        console.log('hehe');
        GameOver=false
        foodCell=generateRandom()
        score=0
        snake=[[0,0]]
      id= setInterval(()=>{
            draw()
            update()
         },200)
       }
   
if(e.key==='ArrowDown'){
    direction='down'
}
else if(e.key==='ArrowUp'){
    direction='up'
}
else if(e.key==='ArrowLeft'){
    direction='left'
}
else{
    direction='right'
}
})
function draw(){
    if(GameOver){
        
        shape.font='60px sans-sarif'
        shape.fillStyle='white'
        shape.fillText('Game Over', 500,300)
        clearInterval(id)
        
        return 
    }
    shape.clearRect(0,0,1200,600)
    for(let i of snake){
         shape.fillStyle='yellow'
        shape.fillRect(i[0],i[1],cell,cell)
    }
    shape.fillStyle='red'
    shape.fillRect(foodCell[0],foodCell[1],cell,cell)
    // shape.fillStyle='green'
    // shape.font='30px sand-sarif'
    // shape.fillText(`${score}`,100,100)
    let div=document.querySelector('div')
    let h1=document.querySelector('h1')
    div.innerText="SCORE :"+score+", HighScore :"+hs
    h1.innerText="LEVEL 1"
    if(score>=100 && score<200){
        hs=score
    div.innerText="SCORE :"+score +", HighScore :"+hs
    h1.innerText="LEVEL 2"
    shape.fillRect(foodCell[0],foodCell[1],cell+f,cell+f)
    }
    else if(score>=200 && score<300){
        div.innerText="SCORE :"+score 
        h1.innerText="LEVEL 3"
        }

}
draw()
 function update(){
    let headx=snake[snake.length-1][0]
    let heady=snake[snake.length-1][1]

    let newheadx
    let newheady

    if(direction==='up'){
        newheadx=headx
        newheady=heady-cell
        if(newheady<0){
            GameOver=true
        }
    }
    else if(direction==='down'){
        newheadx=headx
        newheady=heady+cell
        if(newheady===600){
            GameOver=true
        }
    }
    else if(direction==='left'){
        newheadx=headx-cell
        newheady=heady
        if(newheadx<0){
            GameOver=true
        }
    }
    else{
        newheadx=headx+cell
        newheady=heady
        if(newheadx===1200){
            GameOver=true
        }
    }
    for(let i of snake){
        if(i[0]===newheadx && i[1]===newheady)
            GameOver=true
    }
    if(newheadx===foodCell[0]  && newheady===foodCell[1]){
        foodCell=generateRandom()
        score+=10
        
     }
     else{
        snake.shift()
     }
    
    snake.push([newheadx,newheady])
    // snake.shift()
 }
 function generateRandom(){
    return[
      Math.floor(Math.random()*(1000-cell)/cell)*cell,
      Math.floor(Math.random()*(500-cell)/cell)*cell,

    ]
}
 