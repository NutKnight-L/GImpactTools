var ybtn = document.getElementById('ybtn');
var nbtn = document.getElementById('nbtn');
var main = document.getElementById('main');
var ctrs = document.getElementsByClassName('container');
var b = 2;
var nu = 0;
ybtn.onclick = a;
function a() {
    var aa = document.createElement('div');
    main.appendChild(aa);
    aa.className = 'container';
    var cc = document.createElement('input');
    aa.appendChild(cc);
    cc.type = "button";
    cc.value = "Delete";
    for (var i = 0; i < b; i++) {
        var bb = document.createElement('div');
        aa.appendChild(bb);
        bb.className = 'character';
    }
    nu++;
    cc.id='btn'+nu;
    aa.id=nu;
    var dbtn = document.getElementById('btn'+nu);
    dbtn.onclick = function(){
        // alert(cc.id);
        main.removeChild(aa);
        nu--;
    }
}
nbtn.onclick = function () {
    alert("hh");
}