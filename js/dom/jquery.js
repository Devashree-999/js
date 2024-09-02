console.log($);
let h1=$('h1')
h1.css({color:"green",backgroundColor:"black"})
h1.text('byeee')
// let ip=$('input')
// ip.attr('type','password')
// console.log(ip);
$('button').click(()=>{
    console.log('hi');
    $('h1').fadeToggle()
})
