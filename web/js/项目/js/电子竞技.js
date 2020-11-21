//鼠标点击事件
function Lisck(){
	this.la=document.getElementById('la');
	this.li=document.getElementById('li');
	this.body=document.getElementsByTagName('body');
	this.la1=document.getElementById('la1');
	this.li1=document.getElementById('li1');
	this.ock();
}
Lisck.prototype.ock=function(){
	var that=this;
	this.li.onclick=function(){
		that.dwn(that.la,that.la1);
	}
	this.li1.onclick=function(){
		that.dwn(that.la1,that.la);
	}
	document.onclick=function(){
		that.la.style.display="none";
		that.la1.style.display="none";
	}
}
Lisck.prototype.dwn=function(x,y){
	var ev=ev||window.event;
	if(ev.stopPropagation){
		ev.stopPropagation();//阻止事件传播（高版本浏览器）
	}else{
		ev.cancelBubble=true;//IE6-8;
	}
	x.style.display="block";
	y.style.display="none";
}
new Lisck();
// var la=document.getElementById('la');
// var li=document.getElementById('li');
// var body=document.getElementsByTagName('body');
// var la1=document.getElementById('la1');
// var li1=document.getElementById('li1');
// li.onclick=function(ev){
// 	var ev=ev||window.event;
// 	if(ev.stopPropagation){
// 		ev.stopPropagation();//阻止事件传播（高版本浏览器）
// 	}else{
// 		ev.cancelBubble=true;//IE6-8;
// 	}
// 	la.style.display="block";
// 	la1.style.display="none";
// }
// li1.onclick=function(ev){
// 	var ev=ev||window.event;
// 	if(ev.stopPropagation){
// 		ev.stopPropagation();//阻止事件传播（高版本浏览器）
// 	}else{
// 		ev.cancelBubble=true;//IE6-8;
// 	}
// 	la1.style.display="block";
// 	la.style.display="none";
// }
// document.onclick=function(ev){
// 	la.style.display="none";
// 	la1.style.display="none";
// }
//手风琴1
function sfq(){
	this.la1=document.getElementById('la1');
	this.ul=this.la1.children[0];
	this.liArr=this.ul.children;
	this.left=this.ul.getElementsByTagName('div');
	this.ouer(this.liArr,this.left);
}
sfq.prototype.ouer=function(x,y){
	for(var i=0; i<x.length; i++){
		x[i].index=i;
		x[i].onmouseover=function(){
			y[this.index].style.opacity="1";
			y[this.index].style.width="100px";
			
		}
		x[i].onmouseout=function(){
			y[this.index].style.opacity="0";
			y[this.index].style.width="0";
		}
	}
}
new sfq();
// var la1=document.getElementById('la1');
// var ul=la1.children[0];
// var liArr=ul.children;
// var left=ul.getElementsByTagName('div');
// for(var i=0; i<liArr.length; i++){
// 	liArr[i].index=i;
// 	liArr[i].onmouseover=function(){
// 		left[this.index].style.opacity="1";
// 		left[this.index].style.width="100px";
		
// 	}
// 	liArr[i].onmouseout=function(){
// 		left[this.index].style.opacity="0";
// 		left[this.index].style.width="0";
// 	}
// }
//滚轮事件 置顶
function Gl(){
	this.fix = document.getElementById('fix');
	this.btn=document.getElementById('btn');
	this.timer2=null;
	this.scr();
}
Gl.prototype.scr=function(){
	var that=this;
	window.onscroll=function(){
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		if( t >=50){
			that.fix.style.top='0';
			that.fix.style.width="100%";
			that.fix.style.left="0";
			}else if(t<=50){
				that.fix.style.top='80px';
				that.fix.style.width="1600px";
				that.fix.style.left="160px";
			}
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
Gl.prototype.startMove2=function(iTarget){
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
new Gl();
// window.onscroll = function(){
// 	var t = document.documentElement.scrollTop || document.body.scrollTop;
// 	var fix = document.getElementById('fix');
// 	var btn=document.getElementById('btn');
// 	if( t >=50) {
// 		fix.style.top='0';
// 		fix.style.width="100%"
// 		fix.style.left="0"
// 	}else if(t<=50){
// 		fix.style.top='80px'
// 		fix.style.width="1600px"
// 		fix.style.left="160px"
// 	}
// 	if(t>=1000){
// 		btn.style.display='block';
// 	}else{
// 		btn.style.display='none';
// 	}
// }
// btn.onclick=function(){
// 	startMove2(0);
// }
//视频播放
function vido(){
	this.anniu=document.querySelector('#anniu');
	this.media=document.querySelector('#media');
	this.blk_vio=document.querySelector('#blk_vio');
	this.sp=document.querySelector('#sp');
	this.video=blk_vio.querySelectorAll('video')[0];
	this.clk();
}
vido.prototype.clk=function(){
	var that=this;
	this.anniu.onclick=function(){
		that.media.style.display='none';
		that.blk_vio.style.display='block';
		that.video.play();
	}
	this.sp.onclick=function(){
		that.media.style.display='block';
		that.blk_vio.style.display='none';
	}
}
new vido();
// var anniu=document.querySelector('#anniu');
// var media=document.querySelector('#media');
// var blk_vio=document.querySelector('#blk_vio');
// var sp=document.querySelector('#sp');
// var video=blk_vio.querySelectorAll('video')[0];
// anniu.onclick=function(){
// 	media.style.display='none';
// 	blk_vio.style.display='block';
// 	video.play();
// }
// sp.onclick=function(){
// 	media.style.display='block';
// 	blk_vio.style.display='none';
// }
//手风琴2
function byc(){
	this.maxw=963;
	this.minw=193;
	this.lis=document.querySelectorAll('.byc li');
	this.length=4;
	this.Click(this.lis);
}
//添加事件
byc.prototype.Click=function(obj){
	var that=this;
	for(var z=0;z<obj.length;z++){
		obj[z].index=z;
		obj[z].onmouseenter=function(){
			that.tab(this.index,obj);
		}
	}
}
byc.prototype.tab=function(idx,obj){
	for(var j=0;j<obj.length;j++){
		this.startMove(obj[j],{width:this.minw});
	}
	this.startMove(obj[idx],{width:this.maxw});
}
byc.prototype.startMove=function (obj,json,fn){
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
byc.prototype.getStyle=function(obj,cur){
	if(obj.currentStyle){
		return obj.currentStyle[cur];
	}else{
		return getComputedStyle(obj)[cur];
	}
}
new byc();
// $(function(){

// 	$('#byc li').mouseenter(function(){
	
// 		$(this).animate({left:$(this).index()*192.5});          

// 		$(this).prevAll().each(function(){          

// 			$(this).animate({left:$(this).index()*192.5});
			
// 		});

// 		$(this).nextAll().each(function(){
			
// 			$(this).animate({left:(1540-(4-$(this).index())*192.5)});           
// 		});
// 	});
// })