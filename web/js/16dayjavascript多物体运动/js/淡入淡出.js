function startMove(obj,iTarget,cur){
    clearInterval(obj.time);
    obj.time=setInterval(function(){
        var style=parseFloat(getStyle(obj,cur))*100;//元素当前的透明度值
        var speed=(iTarget-style)/100;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(style==iTarget){
            clearInterval(obj.time);
        }else{
            obj.style.opacity=(style+speed)/100;
            obj.style.filter='alpha(opacity='+(style+speed)+')';
        }
    },10);
}
function getStyle(obj,cur){
    if(obj.currentStyle){
        return obj.currentStyle[cur];
    }else{
        return getComputedStyle(obj)[cur];
    }
}