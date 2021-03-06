//完美运动
function startMove(obj,json,fn){
    clearInterval(obj.time);
    obj.time=setInterval(function(){
        var stop=true;//假设没有不到终点的值了
        for(i in json){
            if(i=='opacity'){
                //获取透明度样式的写法
                var style=Math.round(parseFloat(getStyle(obj,i))*100);
                }else{
                    //获取带px样式的写法
                    var style=parseInt(getStyle(obj,i));
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
function getStyle(obj,cur){
if(obj.currentStyle){
    return obj.currentStyle[cur];
}else{
    return getComputedStyle(obj)[cur];
}
}
//置顶
var timer2=null;
    function startMove2(iTarget){
        clearInterval(timer2);
        timer2=setInterval(function(){
            //求速度
            var t=document.documentElement.scrollTop||document.body.scrollTop;
            var speed=(iTarget-t)/20;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            //运动滚轮
            if(t==iTarget){
                clearInterval(timer2);
            }else{
                document.documentElement.scrollTop=t+speed;
                document.body.scrollTop=t+speed;
            }
        },5);
    }