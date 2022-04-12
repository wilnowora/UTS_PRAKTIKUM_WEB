let kotak123 = document.getElementById('kotak123');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    kotak123.style.left = x - (kotak123.clientWidth/2) + "px";
    kotak123.style.top = y - (kotak123.clientWidth/2) + "px";

}

function random(number) {
    return Math.floor(Math.random()* number)
}

document.onclick = function () {
acak = "rgb(" + random(255) +"," + random(255) +"," +random(255) + ")";
kotak123.style.background = acak

}