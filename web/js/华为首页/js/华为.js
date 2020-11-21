//黑头下拉
var jtwz=getId('jtwz');
var xzqy=getId('xzqy');
var ou_y1=getClass(wrap,'ou_yc')[0];
var ou_y2=getClass(wrap,'ou_yc2')[0];
var nowx=true;
jtwz.onclick=function(){
    if(nowx==true){
        jtwz.innerHTML='集团网站 &and;';
        ou_y2.style.display='none';
        ou_y1.style.display='block';
        startMove(ou_y1,{height:170});
        nowx=false;
    }else if(nowx==false){
        jtwz.innerHTML='集团网站 &or;'
        startMove(ou_y1,{height:0},function(){
            ou_y1.style.display='none';
        })
        nowx=true;
    }
}
nowx=true;
xzqy.onclick=function(){
    if(now==true){
        xzqy.innerHTML='选择区域/语言 &and; |';
        ou_y1.style.display='none';
        ou_y2.style.display='block';
        startMove(ou_y2,{height:250});
        nowx=false;
    }else if(nowx==false){
        xzqy.innerHTML='选择区域/语言 &or; |';
        startMove(ou_y2,{height:0},function(){
            ou_y2.style.display='none';
        })
        nowx=true;
    }
}
//华为下拉
var pp=getClass(container,'pp');
var bbq=getClass(container,'bbq');
var nn=getClass(container,'nn');
for(var i=0;i<pp.length;i++){
    nn[i].index=i;
    nn[i].onmouseover=function(){
        for(var j=0;j<pp.length;j++){
            pp[j].style.display='none';
            startMove(pp[j],{opacity:0,top:50});
        }
        pp[this.index].style.display='block';
        startMove(pp[this.index],{opacity:100,top:100});
    }
    nn[i].onmouseout=function(){
        for(var j=0;j<pp.length;j++){
            pp[j].style.display='none';
        }
    }
}
var lii=getTagName(bc,'li');
var row2=getClass(bc,'row2');
console.log(lii,row2);
for(var i=0;i<row2.length;i++){
    lii[i].index=i;
    lii[i].onclick=function(){
        for(var j=0;j<row2.length;j++){
            row2[j].style.display='none';
        }
        row2[this.index].style.display='block';
    }
}
//大轮播
var outer=document.getElementById('outer');
var inner1=document.getElementById('inner1');
var lis=inner2.getElementsByTagName('li');
var left=document.getElementById('left');
var right=document.getElementById('right');
var now=0;
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onclick=function(){
        for(var j=0;j<lis.length;j++){
            lis[j].className='';
        }
        this.className='active';
        startMove(inner1,{left:-this.index*1364});
        now=this.index;
    }
}
left.onclick=function(){
    now--;
    if(now<0){
        now=lis.length-1;
    }
    for(var j=0;j<lis.length;j++){
        lis[j].className='';
    }
    lis[now].className='active';
    startMove(inner1,{left:-now*1364});
}
right.onclick=function(){
    now++;
    if(now>=lis.length){
        now=0;
    }
    for(var j=0;j<lis.length;j++){
        lis[j].className='';
    }
    lis[now].className='active';
    startMove(inner1,{left:-now*1364});
}
timer=setInterval(right.onclick,2000);
outer.onmouseover=function(){
    left.style.display='block';
    right.style.display='block';
    clearInterval(timer);
}
outer.onmouseout=function(){
    left.style.display='none';
    right.style.display='none';
    timer=setInterval(right.onclick,2000);
}