//点击事件
function clk(){
    this.z=document.querySelectorAll('.z');
    this.dd=document.querySelectorAll('.dd');
    this.ico=document.querySelectorAll('.ico');
    this.kk();
}
clk.prototype.kk=function(){
    var that=this;
    for(var i=0;i<this.z.length;i++){
        this.z[i].index=i;
        this.z[i].onclick=function(ev){
            var ev=ev||window.event;
            if(ev.stopPropagation){
                ev.stopPropagation();//阻止事件传播（高版本浏览器）
            }else{
                ev.cancelBubble=true;//IE6-8;
            }
            for(var j=0;j<that.z.length;j++){
                that.dd[j].style.display='none';
                that.ico[j].style.transform='rotate(0)';
            }
            that.dd[this.index].style.display='block';
            that.ico[this.index].style.transform='rotate(180deg)';
        }
    }
    document.onclick=function(){
        for(var z=0;z<that.dd.length;z++){
            that.dd[z].style.display='none';
            that.ico[z].style.transform='rotate(0)';
        }                     
    }
}
new clk();
// var z=document.querySelectorAll('.z');
// var dd=document.querySelectorAll('.dd');
// var ico=document.querySelectorAll('.ico');
// for(var i=0;i<z.length;i++){
//     z[i].index=i;
//     z[i].onclick=function(ev){
//         var ev=ev||window.event;
//         if(ev.stopPropagation){
//             ev.stopPropagation();//阻止事件传播（高版本浏览器）
//         }else{
//             ev.cancelBubble=true;//IE6-8;
//         }
//         for(var j=0;j<z.length;j++){
//             dd[j].style.display='none';
//             ico[j].style.transform='rotate(0)';
//         }
//         dd[this.index].style.display='block';
//         ico[this.index].style.transform='rotate(180deg)';
//     }
// }
// document.onclick=function(){
//     for(var z=0;z<dd.length;z++){
//         dd[z].style.display='none';
//         ico[z].style.transform='rotate(0)';
//     }                     
// }
//轮播图   
function lbt(){
    this.outer=document.getElementById('outer');
    this.inner1=document.getElementById('inner');
    this.li=document.querySelectorAll('#inner li');
    this.lis=inner2.getElementsByTagName('li');
    this.left=document.getElementById('left');
    this.right=document.getElementById('right');
    this.tz=document.querySelectorAll('.tz');
    this.timer=null;
    this.now=0;
    this.event();
}
lbt.prototype.event=function(){
    var that=this;
    // 小圆点绑定
    for(var i=0;i<this.lis.length;i++){
        this.lis[i].index=i;
        this.lis[i].onclick=function(){
            that.now=this.index;
            for(var j=0;j<that.lis.length;j++){
                that.lis[j].className='';
                that.startMove(that.tz[j],{opacity:0});
                that.li[j].style.backgroundSize='1800px 320px';
            }
            this.className='active';
            that.startMove(that.inner1,{left:-this.index*1900},function(){
                console.log(this);//window
                this.li[this.now].style.backgroundSize='1750px 300px';
                this.startMove(this.tz[this.now],{opacity:100});
            }.bind(that));
        }
    }
    this.lrf();
}
//左右按钮绑定
lbt.prototype.lrf=function(){
    var that=this;
    this.left.onclick=function(){
        that.now--;
        if(that.now<0){
            that.now=that.lis.length-1;
        }
        for(var j=0;j<that.lis.length;j++){
            that.lis[j].className='';
            that.startMove(that.tz[j],{opacity:0});
            that.li[j].style.backgroundSize='1800px 320px';
        }
        that.lis[that.now].className='active';
        that.startMove(that.inner1,{left:-that.now*1900},function(){
            this.li[this.now].style.backgroundSize='1750px 300px';
            this.startMove(this.tz[this.now],{opacity:100});
        }.bind(that));
    }
    this.right.onclick=function(){
        that.now++;
        if(that.now>=that.lis.length){
            that.now=0;
        }
        for(var j=0;j<that.lis.length;j++){
            that.lis[j].className='';
            that.startMove(that.tz[j],{opacity:0});
            that.li[j].style.backgroundSize='1800px 320px';
        }
        that.lis[that.now].className='active';
        that.startMove(that.inner1,{left:-that.now*1900},function(){
            this.li[this.now].style.backgroundSize='1750px 300px';
            this.startMove(this.tz[this.now],{opacity:100});
        }.bind(that));
    }
    this.timer=setInterval(this.right.onclick,3000);
    this.outer.onmouseover=function(){
        clearInterval(that.timer);
    }
    this.outer.onmouseout=function(){
        that.timer=setInterval(that.right.onclick,3000);
    }
}
lbt.prototype.startMove=function (obj,json,fn){
    clearInterval(obj.time);
    var _this=this;
    obj.time=setInterval(function(){
        var stop=true;//假设没有不到终点的值了
        for(i in json){
            if(i=='opacity'){
                //获取透明度样式的写法
                var style=Math.round(parseFloat(_this.getStyle(obj,i))*100);
                }else{
                    //获取带px样式的写法
                    var style=parseInt(_this.getStyle(obj,i));
                }
                var speed=(json[i]-style)/10;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                if(style!=json[i]){
                    stop=false;//意思就是说如果运动的样式其中有没到目标点的,把stop变成false
                }
                if(i=='opacity'){
                    //运动透明度
                    obj.style.opacity=(style+speed)/100;
                    obj.style.filter='alpha(opacity='+(style+speed)+')';
                }else{
                    //运动其他样式
                    obj.style[i]=style+speed+'px';
                }
        }
        if(stop){
            //判断如果stop还是true的情况下，说明没有不到终点的值了
            clearInterval(obj.time);
            if(fn) fn();
        }
    },10)
}
lbt.prototype.getStyle=function(obj,cur){
    if(obj.currentStyle){
        return obj.currentStyle[cur];
    }else{
        return getComputedStyle(obj)[cur];
    }
}
new lbt();
// var outer=document.getElementById('outer');
// var inner1=document.getElementById('inner');
// var li=document.querySelectorAll('#inner li');
// var lis=inner2.getElementsByTagName('li');
// var left=document.getElementById('left');
// var right=document.getElementById('right');
// var tz=document.querySelectorAll('.tz');
// var now=0;
// //第一步给所有圆点绑定
// for(var i=0;i<lis.length;i++){
//     lis[i].index=i;
//     lis[i].onclick=function(){
//         for(var j=0;j<lis.length;j++){
//             lis[j].className='';
//             startMove(tz[j],{opacity:0});
//             li[j].style.backgroundSize='1800px 320px';
//         }
//         this.className='active';
//         startMove(inner1,{left:-this.index*1900},function(){
//             console.log(this);//window
//             li[now].style.backgroundSize='1750px 300px';
//             startMove(tz[now],{opacity:100});
//         });
//         now=this.index;
//     }
// }
// //第二步给左右按钮绑定
// left.onclick=function(){
//     console.log(1);
//     now--;
//     if(now<0){
//         now=lis.length-1;
//     }
//     for(var j=0;j<lis.length;j++){
//         lis[j].className='';
//         startMove(tz[j],{opacity:0});
//         li[j].style.backgroundSize='1800px 320px';
//     }
//     lis[now].className='active';
//     startMove(inner1,{left:-now*1900},function(){
//         li[now].style.backgroundSize='1750px 300px';
//         startMove(tz[now],{opacity:100});
//     });
// }
// right.onclick=function(){
//     now++;
//     if(now>=lis.length){
//         now=0;
//     }
//     for(var j=0;j<lis.length;j++){
//         lis[j].className='';
//         startMove(tz[j],{opacity:0});
//         li[j].style.backgroundSize='1800px 320px';
//     }
//     lis[now].className='active';
//     startMove(inner1,{left:-now*1900},function(){
//         li[now].style.backgroundSize='1750px 300px';
//         startMove(tz[now],{opacity:100});
//     });
// }
// // //第三部自动轮播
// timer=setInterval(right.onclick,3000);
// outer.onmouseover=function(){
//     clearInterval(timer);
// }
// outer.onmouseout=function(){
//     timer=setInterval(right.onclick,3000);
// }
//置顶
function zd(){
    this.btn=document.getElementById('btn');
    this.time=null;
    this.sro();
}
zd.prototype.sro=function(){
    var that=this;
    window.onscroll=function(){
        var t=document.documentElement.scrollTop||document.body.scrollTop;
        if(t>=1000){
            that.btn.style.display='block';
        }else{
            that.btn.style.display='none';
        }
    }
    this.btn.onclick=function(){
        that.startMove2(0);
    }
}
zd.prototype.startMove2=function(iTarget){
	var that=this;
	clearInterval(that.timer2);
        that.timer2=setInterval(function(){
            //求速度
            var t=document.documentElement.scrollTop||document.body.scrollTop;
            var speed=(iTarget-t)/20;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //运动滚轮
            if(t==iTarget){
                clearInterval(that.timer2);
            }else{
                document.documentElement.scrollTop=t+speed;
                document.body.scrollTop=t+speed;
            }
        },5);
}
new zd();
// var btn=document.getElementById('btn');
// var time=null;
//  window.onscroll=function(){
//      var t=document.documentElement.scrollTop||document.body.scrollTop;
//      if(t>=1000){
//          btn.style.display='block';
//      }else{
//          btn.style.display='none';
//      }
//  }
//  btn.onclick=function(){
//      startMove2(0);
//  }
