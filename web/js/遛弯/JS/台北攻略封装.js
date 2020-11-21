function startMove(obj,iTarget,cur){
		clearInterval(obj.time);
		obj.time = setInterval(function (){
			if( cur == 'opacity' ){
				//获取透明度样式的写法:
				var style = Math.round(parseFloat(getStyle(obj,cur))*100);
			}else{
				//获取带px样式的写法.
				var style = parseInt(getStyle(obj,cur));
			}
			var speed = (iTarget - style)/20;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if( style == iTarget ){
				clearInterval(obj.time);
			}else{
				if( cur == 'opacity' ){
					//运动透明度
					obj.style.opacity = (style+speed)/100;
					obj.style.filter = 'alpha(opacity='+(style+speed)+')';
				}else{
					//运动其他带px样式
					obj.style[cur] = style + speed + 'px';
				}
			}

		},10)
	}
	function getStyle(obj,cur){
		if( obj.currentStyle ){
			return obj.currentStyle[cur];
		}else{
			return getComputedStyle(obj)[cur];
		}
	}