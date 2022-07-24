var btn = document.getElementById('btn');
var ctr = document.getElementById('ctr');
var a = 3;
var b=0;
btn.onclick = function(){
    while(1){
        ctr.innerHTML += "<div class='character'></div>";
        b++;
        // console.log("aa");
        if(b == a){
            break;
        }
    }
    
}