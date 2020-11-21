
//眼睛
var ico6=getId('ico6');
var ip3=getId('ip3');
console.log(ico6);
t = true;
ico6.onclick = function(){
    if( t ){
        ico6.style.background = "url(img/ico小图/d1.png) -188px -336px";
        ip3.type = 'text';
        t = false;
    }else{
        ico6.style.background = "url(img/ico小图/d1.png) -141px -98px";
        ip3.type = 'password';
        t = true;
    }
}
var ico7=getId('ico7');
var ip4=getId('ip4');
t = true;
ico7.onclick = function(){
    if( t ){
        ico7.style.background = "url(img/ico小图/d1.png) -188px -336px";
        ip4.type = 'text';
        t = false;
    }else{
        ico7.style.background = "url(img/ico小图/d1.png) -141px -98px";
        ip4.type = 'password';
        t = true;
    }
}
//获取验证码
var yzm=getId('yzm');
var hint2=getId('hint2');
    yzm.onclick=function(){
        hint2.style.display = 'block';
        hint2.innerHTML = '短信已发送,有效时间3分钟';
        time();
    }
    function time(){
        var num=60;
        var timer = setInterval(function(){
            num--;
        //console.log(num);
        yzm.value ='剩余秒数:'+num;
            if( num == 0){
                clearInterval(timer);
                yzm.value = '重新发送';
            }
        },1000)
    }
//判断密码是否一致
var hint4=getId('hint4');
ip4.onblur=function(){
    if(ip3.value!=ip4.value){
        hint4.style.display='block';
        hint4.innerHTML='两次密码不一致 请检查您的密码';
    }
    if(ip3.value==ip4.value){
        hint4.style.display='none';
    }
}
//立即注册
var input_zc=getId('input_zc');
input_zc.onclick=function(){
    if(ip1.value==''){
        hint1.style.display='block';
        hint1.innerHTML='请输入手机号';
    }
    if(ip2.value==''){
        hint2.style.display='block';
        hint2.innerHTML='请输入验证码';
    }
    if(ip3.value==''){
        hint3.style.display='block';
        hint3.innerHTML='请输入密码';
    }
}