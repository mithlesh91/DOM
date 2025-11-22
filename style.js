let img = document.querySelector('img')
let main = document.querySelector('main')

main.addEventListener('mousemove',function(dent){
    img.style.left = dent.clientX + 'px'
    img.style.top = dent.clientY + 'px'
})