var ybtn = document.getElementById('ybtn');
var nbtn = document.getElementById('nbtn');
var main = document.getElementById('main');
var ctrs = document.getElementsByClassName('container');
var b = 3;
ybtn.onclick = a;
function a() {
    var aa = document.createElement('div');
    main.appendChild(aa);
    aa.className = 'container';
    for (var i = 0; i < b; i++) {
        var bb = document.createElement('div');
        aa.appendChild(bb);
        bb.className = 'character';
    }
}
nbtn.onclick = function () {
}