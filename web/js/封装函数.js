//运动函数
function startMove(obj, json, fn) {
    clearInterval(obj.time);
    obj.time = setInterval(function () {
        var stop = true;//假设没有不到终点的值了
        for (i in json) {
            if (i == 'opacity') {
                //获取透明度样式的写法
                var style = Math.round(parseFloat(getStyle(obj, i)) * 100);
            } else {
                //获取带px样式的写法
                var style = parseInt(getStyle(obj, i));
            }
            var speed = (json[i] - style) / 30;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (style != json[i]) {
                stop = false;//意思就是说如果运动的样式其中有没到目标点的,把stop变成false
            }
            if (i == 'opacity') {
                //运动透明度
                obj.style.opacity = (style + speed) / 100;
                obj.style.filter = 'alpha(opacity=' + (style + speed) + ')';
            } else {
                //运动其他样式
                obj.style[i] = style + speed + 'px';
            }
        }
        if (stop) {
            //判断如果stop还是true的情况下，说明没有不到终点的值了
            clearInterval(obj.time);
            if (fn) fn();
        }
    }, 10)
}
//获取非行间样式
function getStyle(obj, cur) {
    if (obj.currentStyle) {
        return obj.currentStyle[cur];
    } else {
        return getComputedStyle(obj)[cur];
    }
}
//置顶
function startMove2(iTarget){
    clearInterval(timer);
    timer=setInterval(function(){
        //求速度
        var t=document.documentElement.scrollTop||document.body.scrollTop;
        var speed=(iTarget-t)/20;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //运动滚轮
        if(t==iTarget){
            clearInterval(timer);
        }else{
            document.documentElement.scrollTop=t+speed;
            document.body.scrollTop=t+speed;
        }
    },5);
}
//获取节点
function getNode(obj,str){
    switch(str){
        case 'first':
            if(obj.firstElementChild){
                return obj.firstElementChild;
            }else{
                return obj.firstChild;
            }
        break;
        case 'last':
            if(obj.lastElementChild){
                return obj.lastElementChild;
            }else{
                return obj.lastChild;
            }
        break;
        case 'next':
            if(obj.nextElementSibling){
                return obj.nextElementSibling;
            }else{
                return obj.nextSibling;
            }
        break;
        case 'previou':
            if(obj.previousElementSibling){
                return obj.previousElementSibling;
            }else{
                return obj.previousSibling;
            }
        break;
        default:
    }
}
//真实距离浏览器的距离
function offsetLT(obj){
    var l=0,t=0;
    while(obj){  
        l+=obj.offsetLeft;
        t+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return {left:l,top:t};
}
//事件监听封装：
function addEvent(obj,ev,fn){
    if(obj.addEventListener){
        obj.addEventListener(ev,fn,false);
    }else{
        obj.attachEvent('on'+ev,fn);
    }
}
//事件移除封装
function removeEvent(obj,ev,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(ev,fn,false);
    }else{
        obj.detachEvent('on'+ev,fn);
    }
}
//ajax
// Ajax({
// 	type:'get',//提交方式
// 	url:'data.php',//接口 路劲
// 	data:{//数据   可以不写
// 		user:user.value,
// 		pwd:pwd.value
// 	},
// 	success:function (data){//加载成功以后执行的函数
// 		console.log(data);
// 	}
// 	error:function (error){//加载失败之后执行的函数
// 		console.log(error);
// 	}
// })
function Ajax(json){
	if(window.XMLHttpRequest){
        var ajax=new XMLHttpRequest();
    }else{
        var ajax=new ActiveXObject('Microsoft.XMLHTTP');
    }
    //
    if(json.type.toLowerCase()=='get'){
    	var tmp = '';
    	if(json.data){
    		for( i in json.data){
    			// user=lxc&pwd=1222&&
    			tmp = tmp + i + '=' + json.data[i] + '&';
    		}
    	}
    	// console.log(tmp);
    	ajax.open(json.type,json.url+'?t='+new Date().getTime()+'&'+tmp,true);
    	ajax.send();
    }else{
    	var tmp = '';
    	if(json.data){
    		for( i in json.data){
    			// user=lxc&pwd=1222&&
    			tmp = tmp + i + '=' + json.data[i] + '&';
    		}
    	}
    	ajax.open(json.type,json.url+'?t='+new Date().getTime(),true);
    	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    	ajax.send(tmp);
    }
    ajax.onreadystatechange=function(){
        if(ajax.readyState==4){
            if(ajax.status==200){
               json.success(eval('('+ajax.responseText+')'));
            }else{
            	if(json.error){
            		json.error(ajax.status);
            	}
            }
        }
    }
}
// 封装删除cookie方法
function removeCookie(name){
    setCookie(name,'',-1);
}
// 封装获取cookie方法
function getCookie(name){
    var arr=document.cookie.split('; ');
    for( var i=0;i<arr.length;i++){
        var arrs=arr[i].split('=');
        if(arrs[0]==name){
            return arrs[1];
        }
    }
    return '';
}
// 封装设置cookie方法
function setCookie(name,value,iDay){
    var date=new Date();
    date.setDate(date.getDate()+iDay);
    document.cookie= name+'='+value+';expires'+date;
}