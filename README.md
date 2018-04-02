###小张飞：zxfjd3g
###js特效
	·offset familly 
		offset scroll client 
		事件对象/event (事件触发，鼠标和键盘的状态)
		-
		Offset : 偏移  js中有一套方便获取尺寸的办法， offset 
			offsetWidth offsetHeight offsetLeft offsetTop 
			offsetParent 
			-
			offset/宽/高 = 盒子自身的宽高/+padding + border 
			offsetWidth = width + paddding + border 
			offsetHeight = Height+ padding border
			-
			offsetLeft offsetTop 
			//检测距离父盒子有定位的左上/上面的距离
			{
				上级带有定位的盒子
				if父级都没定位则以body为准
				offsetleft从父级的padding 开始计算，父亲的border 不算
				在父盒子有定位的情况下，offsetLeft == style.left (去掉px)
				
			}
			-
			offsetParent 
				if当元素的父级元素没有进行定位（absolut relative fixed）
					==offsetParent 为body
				else if 有css 定位
					==offsetParent 为父级元素
	
			
	###offsetLeft and style.Left different 
		最大区别在于offsetLeft 可以返回没有固定盒子的距离的左侧的位置而style.left不可以
		-
		offsetTop返回的是数字 style.top返回的是字符串，除了数字外还有单位。px 
		-
		offsetTop 只读，style.top读写
		-
		if没有给HTML元素指定过top样式，则style.top返回的是空字符串.
	
		
	
