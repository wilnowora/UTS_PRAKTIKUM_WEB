const box = document.getElementById('box');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    box.style.left = x - (box.clientWidth/2) + "px";
    box.style.top = y - (box.clientHeight/2) + "px";

}

function random(number) {
    return Math.floor(Math.random()* number)
}

document.onclick = function () {
acak = "rgb(" + random(255) +"," + random(255) +"," +random(255) + ")";
kotak123.style.background = acak

}