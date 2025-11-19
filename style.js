let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector("#inner");



let a = 0;

btn.addEventListener("click", function() {

     btn.style.pointerEvents = "none";

    let clear = setInterval(() => {
        a++;
        inner.style.width = a + "%";
        h2.innerHTML = a + "%";
    }, 100);

    setTimeout(() => {
        clearInterval(clear);
        h2.innerHTML = "Download Complete";
        btn.style.opacity = "0.5";
    }, 10000 );

})
