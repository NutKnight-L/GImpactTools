var ybtn = document.getElementById('ybtn');
var nbtn = document.getElementById('nbtn');
var abtn = document.getElementById('abtn');
var hbtn = document.getElementById('hbtn');
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
    cc.value = "x";
    // for (var i = 0; i < b; i++) {
    //     var bb = document.createElement('div');
    //     aa.appendChild(bb);
    //     bb.className = 'character';
    // }
    nu++;
    cc.id = 'btn' + nu;
    aa.id = nu;
    var dbtn = document.getElementById('btn' + nu);
    dbtn.onclick = function () {
        // alert(cc.id);
        main.removeChild(aa);
        nu--;
    }
    main.focus();
}
abtn.onclick = function () {
    var intH = document.documentElement.scrollHeight;
    var b = document.createElement('div');
    var a = document.createElement('div');

    document.body.appendChild(b);
    document.body.appendChild(a);

    a.className = 'cover';
    b.className = 'newWindow';
    a.style.height = intH + 'px';
    console.log(intH);
    var bbtn = document.createElement('input');
    b.appendChild(bbtn);
    bbtn.type = 'button';
    bbtn.value = 'close the window';
    bbtn.onclick = function () {
        a.style.display = 'none';
        b.style.display = 'none';
    }
    a.onclick = function(){
        a.style.display = 'none';
        b.style.display = 'none';
    }
}
hbtn.onclick = function(){
    console.log(document.documentElement.scrollHeight);
}