//台北推荐
var btns = document.getElementsByClassName('btn');
for( var i = 0; i < btns.length; i++){
	btns[i].onclick = function(){
		for( var j = 0; j < btns.length; j++){
			btns[j].className = 'btn';
		}
			this.className = 'active btn';
	}
}
// 台北热门

// left
var btn_RM = document.getElementsByClassName('btn_RM');
for( var i = 0; i < btn_RM.length; i++){
	btn_RM.index = i;
	btn_RM[i].onmouseover = function(){
		for( var j = 0; j < btn_RM.length; j++){
			btn_RM[j].className = 'btn_RM';
		}
			this.className = 'btn_RM active'
	}
}
// center
var btn_c = document.getElementsByClassName('btn_c');
for( var i = 0; i < btn_c.length; i++){
	btn_c.index = i;
	btn_c[i].onmouseover = function(){
		for( var j = 0; j < btn_c.length; j++){
			btn_c[j].className = 'btn_c)';
		}
			this.className = 'btn_c active'
	}
}
// right
var btn_r = document.getElementsByClassName('btn_r');
for( var i = 0; i < btn_r.length; i++){
	btn_r.index = i;
	btn_r[i].onmouseover = function(){
		for( var j = 0; j < btn_r.length; j++){
			btn_r[j].className = 'btn_r)';
		}
			this.className = 'btn_r active'
	}
}
// 台北酒店
var btn01 = document.getElementById('btn01');
var btn03 = document.getElementById('btn03');
var p = btn01.getElementsByTagName('p')[0];
var ps = btn02.getElementsByTagName('p')[0];
var p_s = btn03.getElementsByTagName('p')[0];
btn01.onmouseover = function(){
	startMove(p,0,'top')
}
btn01.onmouseout = function(){
	startMove(p,-221,'top')
}
btn02.onmouseover = function(){
	startMove(ps,0,'top')
}
btn02.onmouseout = function(){
	startMove(ps,-221,'top')
}
btn03.onmouseover = function(){
	startMove(p_s,0,'top')
}
btn03.onmouseout = function(){
	startMove(p_s,-221,'top')
}
//台北特产
var btn_ll = document.getElementsByClassName('btn_ll')[0];
var btn_rr = document.getElementsByClassName('btn_rr')[0];
var l_btn = document.getElementsByClassName('l_btn');
var right = document.getElementsByClassName('inner_center_contentTBTC_bot')[0];

// for( var i = 0; i < l_btn.length; i++){
// 	l_btn[i].index = i;
// 	l_btn[i].onclick = function(){
// 		for(var j = 0; j < l_btn.length; j++){
// 			l_btn[j].className = 'l_btn'
// 		}
// 			l_btn[this.index].className = 'l_btn active02';
// 	}
// }
btn_rr.onclick = function(){
	startMove(right,-1000,'left');

}
btn_ll.onclick = function(){
	startMove(right,0,'left');
}
// 台北攻略
var btn_gl01s = document.getElementsByClassName('btn_gl01');
var glimg1s = document.getElementsByClassName('glimg1');
var zuozhe = document.getElementsByClassName('zuozhe')[0];
var span = zuozhe.getElementsByTagName('span')[0];
var arr = ["作者:丁丁","作者:花花","作者:华华"];
console.log(btn_gl01s,glimg1s,zuozhe,span);
var now = 0;
for( var i = 0; i < btn_gl01s.length; i++){
	btn_gl01s[i].index = i;
	btn_gl01s[i].onclick = function(){
		btn_gl01s[now].className = 'li2 btn_gl01 ';
		this.className = 'li2 btn_gl01 active';
		glimg1s[now].style.display = 'none';
		glimg1s[this.index].style.display = 'block';
		span.innerHTML = arr[this.index];
		now = this.index;
	}
}
// 右按钮
btn_right.onclick = function(){
	now++;
	if( now >= btn_gl01s.length){
		now = 0;
	}
	for(var i = 0; i < btn_gl01s.length; i++){
		btn_gl01s[i].className = 'li2 btn_gl01 ';
		glimg1s[i].style.display = 'none';
	}
		btn_gl01s[now].className = 'li2 btn_gl01 active';
		glimg1s[now].style.display = 'block';
		span.innerHTML = arr[now];
}
// 左按钮
btn_left.onclick = function(){
	now--;
	if( now < 0){
		now = 2;
	}
	for(var i = 0; i < btn_gl01s.length; i++){
		btn_gl01s[i].className = 'li2 btn_gl01 ';
		glimg1s[i].style.display = 'none';
	}
		btn_gl01s[now].className = 'li2 btn_gl01 active';
		glimg1s[now].style.display = 'block';
		span.innerHTML = arr[now];
}