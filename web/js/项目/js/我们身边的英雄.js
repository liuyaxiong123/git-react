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
//视频切换
function vdo(){
	this.vdo=document.querySelector('#vdo');
	this.is=document.querySelectorAll('.media i');
	this.gubi=document.querySelector('#gubi');
	this.vide=document.querySelectorAll('.content video');
	this.l_t=document.querySelector('#let');
	this.r_t=document.querySelector('#rit');
	this.yans=document.querySelector('#yans');
	this.now=0;
	this.evo();
}
vdo.prototype.evo=function(){
	var that=this;
	for(var i=0;i<this.is.length;i++){
		this.is[i].index=i;
		this.is[i].onclick=function(){
			for(var z=0;z<that.is.length;z++){
				that.vide[z].style.display='none';
			}
			that.vide[this.index].style.display='block';
			that.vdo.style.display='block';
			that.yans.innerHTML=this.index+1+'/3';
			that.now=this.index;
		}
	}
	this.l_t.onclick=function(){
		that.now--;
		if(that.now<0){
			that.now=2;
		}
		that.fz();
	}
	this.r_t.onclick=function(){
		that.now++;
		if(that.now>2){
			that.now=0;
		}
		that.fz();
	}
	this.gubi.onclick=function(){
		that.vdo.style.display='none';
	}
}
vdo.prototype.fz=function(){
	for(var z=0;z<this.is.length;z++){
		this.vide[z].style.display='none';
	}
	this.vide[this.now].style.display='block';
	this.yans.innerHTML=this.now+1+'/3';
}
new vdo();
// var vdo=document.querySelector('#vdo');
// var is=document.querySelectorAll('.media i');
// var gubi=document.querySelector('#gubi');
// var vide=document.querySelectorAll('.content video');
// var l_t=document.querySelector('#let');
// var r_t=document.querySelector('#rit');
// var yans=document.querySelector('#yans');
// console.log(vdo,is,gubi,vide,l_t,r_t,yans);
// for(var i=0;i<is.length;i++){
// 	is[i].index=i;
// 	is[i].onclick=function(){
// 		for(var z=0;z<is.length;z++){
// 			vide[z].style.display='none';
// 		}
// 		vide[this.index].style.display='block';
// 		vdo.style.display='block';
// 		yans.innerHTML=this.index+1+'/3';
// 		now=this.index;
// 	}
// }
// var now=0;
// l_t.onclick=function(){
// 	now--;
// 	if(now<0){
// 		now=2;
// 	}
// 	for(var z=0;z<is.length;z++){
// 		vide[z].style.display='none';
// 	}
// 	vide[now].style.display='block';
// 	yans.innerHTML=now+1+'/3';
// }
// r_t.onclick=function(){
// 	now++;
// 	if(now>2){
// 		now=0;
// 	}
// 	for(var z=0;z<is.length;z++){
// 		vide[z].style.display='none';
// 	}
// 	vide[now].style.display='block';
// 	yans.innerHTML=now+1+'/3';
// }
// gubi.onclick=function(){
// 	vdo.style.display='none';
// }