var ybtn = document.getElementById('ybtn');
var nbtn = document.getElementById('nbtn');
var main = document.getElementById('main');
var ctrs = document.getElementsByClassName('container');
var b = 0;
ybtn.onclick = a; 
function a() {
    var pp = main.innerHTML;
    main.innerHTML = pp + '<div class="container" id="ctr"><div class="character"></div><div class="character"></div><div class="character"></div></div>';
}
nbtn.onclick = function () {
    main.innerHTML = '<div class="container" id="ctr"><div class="character"></div><div class="character"></div><div class="character"></div></div>';
}