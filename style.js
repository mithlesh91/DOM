let h2 = document.querySelector('h2');
let ince = document.getElementById('ince');

 count = 0;

ince.addEventListener('click', function() {
    count++;
    h2.innerHTML = count;

});

let dec = document.getElementById('dec');

dec.addEventListener('click', function() {
    count--;
    h2.innerHTML = count;
});