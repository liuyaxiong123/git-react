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
// document.onclick=function(){
// 	la.style.display="none";
// 	la1.style.display="none";
// }
//手风琴
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

//滚轮事件
function Gl(){
	this.fix = document.getElementById('fix');
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
	}
}
new Gl();
// window.onscroll = function(){
// var t = document.documentElement.scrollTop || document.body.scrollTop;
// var fix = document.getElementById('fix');
//    if( t >=50) {
// 	fix.style.top='0';
// 	fix.style.width="100%"
// 	fix.style.left="0"
// 	}else if(t<=50){
// 		fix.style.top='80px'
// 		fix.style.width="1600px"
// 		fix.style.left="160px"
// 	}
// }
//tab切换
function Tab(){
	this.tabTitle=document.getElementById('tabTitle');
	this.tabContent=document.getElementById('tabContent');
	this.liArr=tabTitle.getElementsByTagName('li');
	this.divArr=tabContent.getElementsByTagName('li');
	this.uer();
}
Tab.prototype.uer=function(){
	var that=this;
	for(var i=0;i<this.liArr.length;i++){
		(function(z){
			that.liArr[z].onmouseover=function(){
				for(var j=0; j<that.liArr.length; j++){
					that.liArr[j].className="";
					that.divArr[j].style.display="none";
				}
				that.liArr[z].className="current";
				that.divArr[z].style.display="block";
			}
		})(i);
	}
}
new Tab();
// var tabTitle=document.getElementById('tabTitle');
// 	var tabContent=document.getElementById('tabContent');
// 	var liArr=tabTitle.getElementsByTagName('li');
// 	var divArr=tabContent.getElementsByTagName('li');
// 	//循环绑定事件
// 	for(var i=0; i<liArr.length; i++){
// 		liArr[i].index=i;
// 		liArr[i].onmouseover=function(){
// 			for(var j=0; j<liArr.length; j++){
// 				liArr[j].className="";
// 				divArr[j].style.display="none";
// 			}
// 			liArr[this.index].className="current";
// 			divArr[this.index].style.display="block";
// 		}
// 	}
