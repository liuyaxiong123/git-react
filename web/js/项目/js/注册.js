
window.onload=function(){
    txt1.focus();//页面加载完自动获取身份证焦点
}//身份证
txt1.onfocus=function(){
    txt1_b.style.display='block';
    txt3_b.style.display='none';
    txt4_b.style.display='none';
    txt5_b.style.display='none';
    txt6_b.style.display='none';
}
var reg=/^[0-9]$/g;
txt1.onblur=function(){
    txt1_b.style.display='none';
}
//电子邮箱
txt3.onblur=function(){
    var reg=/^\w+@[0-9a-z]+\.[a-z]{2,3}$/g;
    if(reg.test(txt3.value)==false){
        txt3_b.style.display='block';
    }
}
//密码
txt4.onfocus=function(){
    txt4_b.style.display='block';
}
txt4.onblur=function(){
    var reg2=/^\w{8,16}$/g;
    if(reg2.test(txt4.value)){
        txt4_b.style.display='none';
    }else{
        txt4_b.innerHTML='<span>密码不符合要求</span>';
    }
}
//手机号码
txt5.onfocus=function(){
    txt5_b.style.display='block';
    sjwx.style.display='none';
}
txt5.onblur=function(){
    var reg3=/^1\d{10}$/g;
    if(reg3.test(txt5.value)){
        txt5_b.style.display='none';
    }else{
        sjwx.style.display='block';
        txt5_b.style.display='none';
    }
}
//验证码
txt6.onfocus=function(){
    txt6_b.style.display='block';
}
txt6.onblur=function(){
    txt6_b.style.display='none';
}
//提交按钮
var nb=document.querySelectorAll('.nb');
tj.onclick=function(){
    for(var i=0;i<nb.length;i++){
        if(nb[i].value==''){
            r_d.style.display='block';
            nb[i].style.borderColor='red';
        }
    }
}