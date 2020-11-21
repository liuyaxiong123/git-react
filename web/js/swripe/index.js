var imgArr = [{ img: 'img/lb1.png', title: '标题自己加' }, { img: 'img/lb2.png', title: '标题自己加' }, { img: 'img/lb3.jpg', title: '标题自己加' }, { img: 'img/lb4.jpg', title: '标题自己加' }];
//设置横向与纵向div个数
var imgindex = 0;
var zindex = 999998;
var setNum = {
    x: 8,
    y: 4
}

//动画组
var animationAry = new Array();
//lbt标题
var oLbBottom = document.querySelector('.lb_bottom');
//lbtdiv
var oImg = document.querySelector('.lb_list');


init();

//初始化轮播 
function init() {
    var bstr = '';
    imgArr.forEach(function(it, i) {
        bstr += '<li class="span">' + it.title + '</li>'
    })
    oLbBottom.innerHTML = bstr;
    initImg(setNum.x, setNum.y);
}
//初始化图片
function initImg(x, y) { //x横向div个数，y竖向div个数
    if (imgindex == imgArr.length) {
        imgindex = 0;
    }
    var newdiv = document.createElement("div");
    newdiv.style.zIndex = zindex;
    newdiv.className = "boom";
    oImg.appendChild(newdiv);
    zindex--;
    var h = oImg.offsetHeight / y;
    var w = oImg.offsetWidth / x;
    for (var i = 0; i < y; i++) { //纵向 xy哪个少就先循环那个
        for (var s = 0; s < x; s++) { //横向
            var oDiv = document.createElement('div');
            oDiv.className = 'item';
            oDiv.style.height = h + 'px';
            oDiv.style.width = w + 'px';
            oDiv.style.backgroundImage = 'url(' + imgArr[imgindex].img + ')';
            oDiv.style.backgroundPositionX = -w * s + 'px';
            oDiv.style.backgroundPositionY = -h * i + 'px';
            oDiv.style.float = 'left';
            newdiv.appendChild(oDiv);
        }
    }
    imgindex++;
    var divs = newdiv.children;
    setTimeout(function() {
        initImg(x, y);
        for (var i = 0; i < divs.length; i++) {
            divs[i].style.transition = Math.random() * 1 + 0.5 + 's all ease';
            divs[i].style.transform = "translateX(" + (Math.random() * 300 - 100) + "px) translateY(" + (Math.random() * 300 - 100) + "px) translateZ(" + (Math.random() * 300 - 100) + "px) rotateZ(" + (Math.random() * 360 - 180) + "deg) scale(" + (Math.random() * 1 + 0.8) + ") rotateX(" + (Math.random() * 360 - 180) + "deg) rotateY(" + (Math.random() * 360 - 180) + "deg)";
            divs[i].style.opacity = 0;
        }
        setTimeout(function() {
            var bom = document.getElementsByClassName("boom");
            oImg.removeChild(bom[0]);
        }, 2000)
    }, 2000)
}