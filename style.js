let heart = document.querySelector('#heart');
let img = document.querySelector('img');



img.addEventListener('dblclick', function() {
    heart.style.opacity = '1';
    heart.style.transform = 'translate(-50%, -50%) scale(1)';

    console.log('double clicked');

    setTimeout(function() {
        heart.style.opacity = '0';
        heart.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 1000);
});