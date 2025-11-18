let main = document.querySelector('main');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    let div=document.createElement('div');

    let a= Math.random()*100;
    let b= Math.random()*100;
    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);
    

    div.style.width='100px';
    div.style.height='100px';
    div.style.backgroundColor='rgb(' + c1 + ',' + c2 + ',' + c3 + ')';
    div.style.position='absolute'; 
    main.appendChild(div);
    div.style.left= a + '%';
    div.style.top= b + '%';
    div.style.rotate= Math.random()*360 + 'deg';

});