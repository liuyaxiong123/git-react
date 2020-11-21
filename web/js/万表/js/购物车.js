//表头下拉
var opxl=getId('opxl');
var kfdw=getId('kfdw');
var p_k=getClass(kfdw,'p_k');
opxl.onmouseenter=function(){
    startMove(kfdw,{height:200},function(){
        kfdw.style.borderBottom='1px solid';
        p_k[0].style.display='block';
        p_k[1].style.display='block';
    });
}
opxl.onmouseleave=function(){
    p_k[0].style.display='none';
    p_k[1].style.display='none';
    startMove(kfdw,{height:0},function(){
        kfdw.style.borderBottom=0;
    });
}