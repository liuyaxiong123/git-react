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
//大轮播
var con1=getId('con1');
var cons=getId('cons');
var con2_li=getTagName(con2,'li');
var conz=getId('conz');
var con1_l=getId('con1_l');
var con1_r=getId('con1_r');
var now=0;
console.log(con2_li);
for(var i=0;i<con2_li.length;i++){
    con2_li[i].index=i;
    con2_li[i].onclick=function(){
        for(var j=0;j<con2_li.length;j++){
            con2_li[j].className='';
        }
        this.className='conz_active';
        startMove(cons,{left:-this.index*1280});
        now=this.index;
    }
}
con1_l.onclick=function(){
    now--;
    if(now<0){
        now=con2_li.length-1;
    }
    for(var j=0;j<con2_li.length;j++){
        con2_li[j].className='';
    }
    con2_li[now].className='conz_active';
    startMove(cons,{left:-now*1280});

}
con1_r.onclick=function(){
    now++;
    if(now>=7){
        now=0;
    }
    for(var j=0;j<con2_li.length;j++){
        con2_li[j].className='';
    }
    con2_li[now].className='conz_active';
    startMove(cons,{left:-now*1280});
}
timer=setInterval(con1_r.onclick,2000);
//倒计时
var time =getId('time');
var timerA=null;
function setTime(){
    var date1=new Date();//此刻时间
    var time1=date1.getTime();//此刻时间到1970年1月一日年的毫秒数
    var date2=new Date('2019/10/1');//目标时间
    var time2 =date2.getTime();//目标时间到1970年1月一日年的毫秒数
    var SY=time2-time1;//俩时间相差多少毫秒
    var day=Math.floor(SY/(24*60*60*1000));//天数
    SY=SY%(24*60*60*1000);//求不到一天的毫秒
    var hour=Math.floor(SY/(60*60*1000));// 小时
    SY=SY%(60*60*1000);//求不到一小时的毫秒
    var minutes=Math.floor(SY/(60*1000));//分钟
    SY=SY%(60*1000);//不到一分钟的毫秒
    var seconds=Math.floor(SY/1000);//秒数
    if(day<=0&&hour<=0&&minutes<=0&&seconds<=0&&milli<=0){
        time.innerHTML='0天0时0分0秒';
        clearInterval(timerA);
    }else{
        time.innerHTML='距离本期结束'+day+'天'+hour+'小时'+minutes+'分'+seconds+'秒';
    }
}
timerA=setInterval(setTime,1);
//限时无缝滚动
var _left=getId('_left');
var _right=getId('_right');
var inner=getId('inner');
// inner.innerHTML=inner.innerHTML+inner.innerHTML;
inner.style.width=570*6+'px';
var now2x=1;
//var timer1x=null,timer2x=null;  
// _left.onclick=function(){
//     clearInterval(timer1x);
//     clearInterval(timer2x);
//     timer1x=setInterval(function(){
//         inner.style.left=inner.offsetLeft+5+'px';
//         if(inner.offsetLeft>=0){
//             inner.style.left=-inner.offsetWidth/2+'px';
//         }
//         if(inner.offsetLeft%in_li[0].offsetWidth==0){
//             clearInterval(timer1x);
//         }
//     },1);
// }
// _right.onclick=function(){
//     clearInterval(timer2x);
//     clearInterval(timer1x);
//     timer2x=setInterval(function(){
//         inner.style.left=inner.offsetLeft-5+'px';
//         if(inner.offsetLeft<=-inner.offsetWidth/2){
//             inner.style.left=0;
//         }
//         if(inner.offsetLeft%in_li[0].offsetWidth==0){
//             clearInterval(timer2x);
//         }
//     },1);
// }
_left.onclick=function(){
    if( now2x>0){
        now2x--;
        startMove(inner,{left:-now2x*570},function (){
            if( now2x<1){
                inner.style.left = '-2280px';
                now2x = 5;
            }
        });
    }
}
_right.onclick=function(){
    if( now2x<5 ){
        now2x++;
        startMove(inner,{left:-now2x*570},function (){
            if( now2x>4){
                inner.style.left = '-570px';
                now2x = 1;
            }
        });
    }
}

//timer8x=setInterval(_right.onclick,2000);
//限时图片透明轮播
var _leftr=getId('_leftr');
var _rightr=getId('_rightr');
var lit=getTagName(tm,'li');
var lia=getTagName(av,'li');
var now1=0;
for(var i=0;i<lia.length;i++){
    lia[i].index=i;
    lia[i].onclick=function(){
        for(var j=0;j<lia.length;j++){
            lia[j].className='';
            startMove(lit[j],{opacity:0});
        }
        this.className='active';
        startMove(lit[this.index],{opacity:100});
        now1=this.index;
    }
}
_leftr.onclick=function(){
    now1--;
    if(now1<0){
        now1=lia.length-1;
    }
    for(var j=0;j<lia.length;j++){
        lia[j].className='';
        startMove(lit[j],{opacity:0});
    }
    lia[now1].className='active';
        startMove(lit[now1],{opacity:100});
}
_rightr.onclick=function(){
    now1++;
    if(now1>=lia.length){
        now1=0;
    }
    for(var j=0;j<lia.length;j++){
        lia[j].className='';
        startMove(lit[j],{opacity:0});
    }
    lia[now1].className='active';
    startMove(lit[now1],{opacity:100});
}
timer4x=setInterval(_rightr.onclick,1000);
rilb.onmouseover=function(){
    clearInterval(timer4x);
}
rilb.onmouseout=function(){
    timer4x=setInterval(_rightr.onclick,1000);
}
//达人臻选
var talent=getId('talent');
var ta_lis=getTagName(talent,'li');
var talent_box=document.getElementsByClassName('talent_box');
var ta_i=getTagName(talent,'i');
var tabt_l=getId('talent_btnL');
var tabt_r=getId('talent_btnR');
var tanow=0;
for(var i=0;i<ta_lis.length;i++){
    ta_lis[i].index=i;
    ta_lis[i].onmouseover=function(){
        for(var j=0;j<ta_lis.length;j++){
            ta_lis[j].className='';
            talent_box[j].style.display='none';
            ta_i[j].className='';
        }
        this.className='back1';
        talent_box[this.index].style.display='block';
        ta_i[this.index].className='ico_jt1';
        now=this.index;
    }
}
tabt_l.onclick=function(){
    tanow--;
    if(tanow<0){
        tanow=3;
    }
    for(var j=0;j<ta_lis.length;j++){
        ta_lis[j].className='';
        talent_box[j].style.display='none';
        ta_i[j].className='';
    }
    ta_lis[tanow].className='back1';
    talent_box[tanow].style.display='block';
    ta_i[tanow].className='ico_jt1';
}
tabt_r.onclick=function(){
    tanow++;
    if(tanow>=ta_lis.length){
        tanow=0;
    }
    for(var j=0;j<ta_lis.length;j++){
        ta_lis[j].className='';
        talent_box[j].style.display='none';
        ta_i[j].className='';
    }
    ta_lis[tanow].className='back1';
    talent_box[tanow].style.display='block';
    ta_i[tanow].className='ico_jt1';
}
//品牌馆
var brn_li=getTagName(brand,'li');
var bta_bx=document.getElementsByClassName('brand_box');
var xxj=getTagName(brand,'i');
var bra_lip=document.getElementsByClassName('brand_lip');
var ssh=document.getElementsByClassName('ssh');
for(var i=0;i<brn_li.length;i++){
    brn_li[i].index=i;
    brn_li[i].onmouseover=function(){
        for(var j=0;j<brn_li.length;j++){
            brn_li[j].className='';
            bta_bx[j].style.display='none';
            xxj[j].className='';
        }
        this.className='back2';
        bta_bx[this.index].style.display='block';
        xxj[this.index].className='ico_jt2';
    }
}
for(var i=0;i<ssh.length;i++){
    ssh[i].index=i;
    ssh[i].onmouseover=function(){
        startMove(bra_lip[this.index],{opacity:100});
    }
    ssh[i].onmouseout=function(){
        startMove(bra_lip[this.index],{opacity:0});
    }
}
//侧边栏
//头像
var bbc=getId('bbc');
var pi_left=getId('picture_left');
var pi_gb=getId('picture_gb');
bbc.onmouseover=function(){
    startMove(pi_left,{opacity:100,right:72});
}
pi_gb.onclick=function(){
    startMove(pi_left,{opacity:0,right:-302});
}
//置顶
fh.onclick=function(){
    startMove5x(0);
}