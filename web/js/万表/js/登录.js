	
//切换
var vip = getId('vip');
var yard = getId('yard');
var input_box = getId('input_box');
var saoma_box = getId('saoma_box');
vip.onclick = function(){
    input_box.style.display = 'block';
    this.style.color = '#cc5252';
    saoma_box.style.display = 'none';
    yard.style.color = 'grey';
}
yard.onclick = function(){
    input_box.style.display = 'none';
    vip.style.color = 'grey';
    saoma_box.style.display = 'block';
    this.style.color = '#cc5252';
}
//获取验证码
var btn=getId('btn');
var bb=60;
var lone=null;
btn.onclick=function(){
    lone=setInterval(function(){
        bb--;
        btn.innerHTML='剩余'+bb+'s';
        if(bb==0){
            clearInterval(lone);
            bb.innerHTML='重新发送';    
        }
    },1000)
}
//立即登录
var btn_b = getId('btn_b');
btn_b.onclick = function(){
    if(zhangh.value == ''){
        hi1.style.display = 'block';
        hi1.innerHTML = '账号不能为空';
    }else{
        hi1.style.display = 'none';
        hi1.innerHTML = '';	
    }
    if(yz.value ==''){
        hi2.style.display = 'block';
        hi2.innerHTML = '请输入6位数验证码';
    }else{
        hi2.style.display = 'none';
        hi2.innerHTML = '';
        qrdl.href = '万表.html';
    }
}
