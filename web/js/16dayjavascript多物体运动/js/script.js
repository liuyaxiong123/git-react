function startMove(obj,iTarget,cur){
    clearInterval(obj.time);
    obj.time = setInterval(function(){
        var  speed = (iTarget-parseInt(getStyle(obj,cur)))/10;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        if(parseInt(getStyle(obj,cur)) == iTarget){
            clearInterval(obj.time);
        }else{
            obj.style[cur] = parseInt(getStyle(obj,cur)) + speed + 'px';
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