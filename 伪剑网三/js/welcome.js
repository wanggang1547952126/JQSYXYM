	let phoneHTML = ''; //手机注册的HTML
	let personalHTML = ''; //个性注册的HTML
	let CGvedio = document.getElementById("CGvedio");//CG动画
	let dodgevedio = document.getElementById("dodgevedio");//轻功动画
	let registerWindow = document.getElementById("register");//注册界面
	let central_footer = document.getElementById("central_footer");
	let central_top = document.getElementById("central_top");
	let footerRegister = central_footer.getElementsByClassName("register")[0];//中间尾部注册按钮
	let headerVedioBotton = central_top.getElementsByTagName("div")[0];//中间头部播放按钮
	let CGVedioBotton = document.getElementById("CG")
						 .getElementsByClassName("mp4")[0]
						 .getElementsByClassName("playBottom")[0];//中间CG播放按钮
	let dodgeVedioBotton = document.getElementById("dodge")
						 		  .getElementsByClassName("mp4")[0]
						 		  .getElementsByClassName("playBottom")[0];//轻功播放按钮
	let registerTitle = central_top.getElementsByClassName("left")[0]
							   .getElementsByTagName("i")[0]
							   .getElementsByTagName("span");//注册方式
	let phoneRegister = registerTitle[0]; //手机注册
	let personalRegister = registerTitle[1]; //个性注册
	let registerContent = central_top.getElementsByClassName("left")[0]
								 .getElementsByTagName("div")[0];//注册方式切换时需要修改的内容
	let rightRotationData = [
						'../img/xzjp1-2c7c98dc.png.webp',
						'../img/xzjp2-3c4c4d66.png.webp',
						'../img/xzjp3-0af60cf2.png.webp',
						'../img/xzjp4-ffba5428.png.webp'
					   ];//中间头部右边轮播数据
	let rightIndex = 0;//中间头部右边轮播下标
	let rightRotationStatus = false;//中间头部右边轮播状态
	let rightRotationTransform = 0;//中间头部右边偏移量
	let rightRotation = central_top.getElementsByClassName("right")[0]
						   .getElementsByTagName("div")[0]
						   .getElementsByTagName("div")[0]
						   .getElementsByTagName("div")[0];//中间头部右边轮播
	let rightRotationFocu = central_top.getElementsByClassName("right")[0]
						   	   .getElementsByTagName("div")[0]
						   	   .getElementsByTagName("div")[0]
						   	   .getElementsByTagName("div")[1]
						   	   .getElementsByTagName("p");//中间头部右边轮播焦点
	let centerRotationData = [
						'../img/zxjl1-1efe3f7c.png.webp',
						'../img/zxjl2-e9700494.png.webp'
					   ];//中间头部中部轮播数据
	let centerIndex = 0;//中间头部中部轮播下标
	let centerRotationStatus = false;//中间头部中部轮播状态
	let centerRotationTransform = 0;//中间头部中部偏移量
	let centerRotation = central_top.getElementsByClassName("center")[0]
						   .getElementsByTagName("div")[0]
						   .getElementsByTagName("div")[0]
						   .getElementsByTagName("div")[0];//中间头部中部轮播
	let centerRotationFocu = central_top.getElementsByClassName("center")[0]
						   	   .getElementsByTagName("div")[0]
						   	   .getElementsByTagName("div")[0]
						   	   .getElementsByTagName("div")[1]
						   	   .getElementsByTagName("p");//中间头部中部轮播焦点
	let nationalRotationData = [
								'../img/gfsj_zy.mp4',
								'../img/gfsj_xj.mp4',
								'../img/gfsj_gy.mp4',
								'../img/gfsj_sl.mp4',
								'../img/gfsj_hh.mp4',
								'../img/gfsj_sc.mp4'
								];//国风轮播数据
	let nationalRotationFocuData = [
									{before:'url("../img/dashijie-b606cf26.png.webp") no-repeat',after:'url("../img/dashijie-b606cf26.png.webp") -368px 0 no-repeat'},
									{before:'url("../img/dashijie-b606cf26.png.webp") -55px 0 no-repeat',after:'url("../img/dashijie-b606cf26.png.webp") -420px 0 no-repeat'},
									{before:'url("../img/dashijie-b606cf26.png.webp") -110px 0 no-repeat',after:'url("../img/dashijie-b606cf26.png.webp") -475px 0 no-repeat'},
									{before:'url("../img/dashijie-b606cf26.png.webp") -165px 0 no-repeat',after:'url("../img/dashijie-b606cf26.png.webp") -530px 0 no-repeat'},
									{before:'url("../img/dashijie-b606cf26.png.webp") -220px 0 no-repeat',after:'url("../img/dashijie-b606cf26.png.webp") -585px 0 no-repeat'},
									{before:'url("../img/dashijie-b606cf26.png.webp") -275px 0 no-repeat',after:'url("../img/dashijie-b606cf26.png.webp") -640px 0 no-repeat'}
									];//国风轮播焦点数据
	let nationalIndex = 0;//国风轮播下标
	let nationalRotation = document.getElementById("national")
						   .getElementsByClassName("mp4")[0]
						   .getElementsByTagName("div")[0];//国风轮播
	let nationalRotationFocu = document.getElementById("national")
						   		.getElementsByClassName("mp4")[0]
						   		.getElementsByTagName("div")[1]
						   		.getElementsByTagName("div");//国风轮播焦点
	let sectsRotationData = [
								'../img/bg-a7d1a5e6.png.webp',
								'../img/bg-6e4be05c.png.webp',
								'../img/bg-cc34011d.png.webp',
								'../img/bg-f3ca2a29.png.webp',
								'../img/bg-83cd0228.png.webp',
								'../img/bg-b1e24c87.png.webp',
								'../img/bg-8345b6ff.png.webp',
								'../img/bg-fe3cec13.png.webp',
								'../img/bg-00cd2c00.png.webp',
								'../img/bg-defe1f22.png.webp',
								'../img/bg-37cb497b.png.webp',
								'../img/bg-2f4e6512.png.webp',
								'../img/bg-b9d502ff.png.webp',
								'../img/bg-8325c000.png.webp',
								'../img/bg-770f170b.png.webp',
								'../img/bg-ddf49a1a.png.webp'
								];//门派轮播数据
	let sectsRotationFocuData = [
									{before:'url("../img/ytz.png") 0 14px no-repeat',after:'url("../img/ytz.png") 0 -29px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") 0 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") 0 -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -90px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -90px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -177px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -177px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -265px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -265px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -353px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -353px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -441px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -441px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -529px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -529px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -617px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -617px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -705px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -705px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -793px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -793px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -881px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -881px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -969px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -969px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -1057px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -1057px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -1145px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -1145px -38px no-repeat'},
									{before:'url("../img/mpnav-8d7fe6eb.png.webp") -1233px 3px no-repeat',after:'url("../img/mpnav-8d7fe6eb.png.webp") -1233px -38px no-repeat'}
									];//门派轮播焦点数据
	let sectsIndex = 0;//门派轮播下标
	let sectsOpacity = 1;//门派轮播透明度
	let sectsRotationStatus = false;//门派轮播状态
	let sectsRotation = document.getElementById("sects")
						   .getElementsByTagName("div")[0]
						   .getElementsByTagName("a")[0];//门派轮播
	let sectsRotationFocu = document.getElementById("sects")
						   		.getElementsByTagName("div")[0]
						   		.getElementsByTagName("div")[0]
						   		.getElementsByTagName("a");//门派轮播焦点
	let variousPlayRotationData = [
								'../img/ts0-63f3a4b6.jpg.webp',
								'../img/ts1-cfbdbc61.jpg.webp',
								'../img/ts2-4b79fe02.jpg.webp',
								'../img/ts3-f1788d89.jpg.webp',
								'../img/ts4-cc84f71f.jpg.webp',
								'../img/ts5-1bd00a1f.jpg.webp'
								];//多样玩法轮播数据
	let variousPlayRotationFocuData = [
									{before:'url("../img/wanfa-7e9d106f.png.webp") -279px 0px no-repeat',after:'url("../img/wanfa-7e9d106f.png.webp") -649px 0px no-repeat'},
									{before:'url("../img/wanfa-7e9d106f.png.webp") 0px 0px no-repeat',after:'url("../img/wanfa-7e9d106f.png.webp") -368px 0px no-repeat'},
									{before:'url("../img/wanfa-7e9d106f.png.webp") -60px 0px no-repeat',after:'url("../img/wanfa-7e9d106f.png.webp") -428px 0px no-repeat'},
									{before:'url("../img/wanfa-7e9d106f.png.webp") -115px 0px no-repeat',after:'url("../img/wanfa-7e9d106f.png.webp") -483px 0px no-repeat'},
									{before:'url("../img/wanfa-7e9d106f.png.webp") -170px 0px no-repeat',after:'url("../img/wanfa-7e9d106f.png.webp") -538px 0px no-repeat'},
									{before:'url("../img/wanfa-7e9d106f.png.webp") -225px 0px no-repeat',after:'url("../img/wanfa-7e9d106f.png.webp") -593px 0px no-repeat'}
									];//多样玩法轮播焦点数据
	let variousPlayIndex = 0;//多样玩法轮播下标
	let variousPlayOpacity = 1;//多样玩法轮播透明度
	let variousPlayRotationStatus = false;//多样玩法轮播状态
	let variousPlayRotation = document.getElementById("variousPlay")
						   .getElementsByTagName("div")[0]
						   .getElementsByTagName("div")[0];//多样玩法轮播
	let variousPlayRotationFocu = document.getElementById("variousPlay")
						   		.getElementsByTagName("div")[0]
						   		.getElementsByTagName("div")[1]
						   		.getElementsByTagName("div");//多样玩法轮播焦点
	phoneHTML += '<img src="../img/icon4.png">';
	phoneHTML += '<input placeholder="输入手机号" type="tel" />';
	phoneHTML += '<p>输入信息获取验证码</p>';
	phoneHTML += '<img src="../img/icon5.png">';
	phoneHTML += '<input placeholder="短信验证码" type="number" />';						
	phoneHTML += '<input type="submit" value="发送手机验证码" />';
	phoneHTML += '<img src="../img/icon3.png">';
	phoneHTML += '<input placeholder="密码（8-32位字母/数字/符号组合）" type="password" />';
	phoneHTML += '<input type="checkbox" /> 我同意';
	phoneHTML += '<a target="_blank" href="https://help.xoyo.com/agreement?name=kingsoft-network-service-agreement">金山网络服务使用协议</a>';
	personalHTML += '<img src="../img/icon1.png">';
	personalHTML += '<input placeholder="输入账号（首位字母，非邮箱，4-18位）" type="tel" />';
	personalHTML += '<img src="../img/icon3.png">';
	personalHTML += '<input placeholder="密码（8-32位字母/数字/符号组合）" type="password" />';
	personalHTML += '<p>输入信息获取验证码</p>';
	personalHTML += '<input type="checkbox" /> 我同意';
	personalHTML += '<a target="_blank" href="https://help.xoyo.com/agreement?name=kingsoft-network-service-agreement">金山网络服务使用协议</a>';
	footerRegister.onclick=()=>{
		black.style.display="block";
		registerWindow.style.display="block";
	}
	headerVedioBotton.onclick=()=>{
		black.style.display="block";
		CGvedio.style.display="block";
		CGvedio.autoplay = "autoplay";
	}
	CGVedioBotton.onclick=()=>{
		black.style.display="block";
		CGvedio.style.display="block";
		CGvedio.autoplay = "autoplay";
	}
	dodgeVedioBotton.onclick=()=>{
		black.style.display="block";
		dodgevedio.style.display="block";
		dodgevedio.autoplay = "autoplay";
	}
	black.onclick = ()=>{
		if(dodgevedio.style.display=="block"||CGvedio.style.display=="block"){
			black.style.display="none";
			CGvedio.style.display="none";
			dodgevedio.style.display="none";
			CGvedio.muted = "muted";
			dodgevedio.muted = "muted";
		}
	}
	phoneRegister.onclick = () => {
		phoneRegister.className = "on";
		personalRegister.className = "";
		registerContent.innerHTML = phoneHTML;
	}
	personalRegister.onclick = () => {
		phoneRegister.className = "";
		personalRegister.className = "on";
		registerContent.innerHTML = personalHTML;
	}
	//中间头部右边轮播
	for(let i=0;i<rightRotationFocu.length;i++){
		rightRotationFocu[i].onclick = ()=>{
			if(!rightRotationStatus){
				rightAnimate(i);
			}
		}
	}
	let a = 1;//计数器
	setInterval(()=>{
		if(!rightRotationStatus){
			if(a==4){
				a=0;
			}
				rightAnimate(a++);
			}
	},1000);
	//中间头部中部轮播
	for(let i=0;i<centerRotationFocu.length;i++){
		centerRotationFocu[i].onclick = ()=>{
			if(!centerRotationStatus){
				centerAnimate(i);
			}
		}
	}
	let b = 1;//计数器
	setInterval(()=>{
		if(!centerRotationStatus){
			if(b==2){
				b=0;
			}
				centerAnimate(b++);
			}
	},1000);
	//国风轮播
	nationalRotationFocu[0].style.background = nationalRotationFocuData[0].after;
	for(let i = 0;i<nationalRotationFocu.length;i++){
		nationalRotationFocu[i].onmouseover = ()=>{
			if(nationalIndex!=i){
				nationalRotationFocu[i].style.height = '284px';
				nationalRotationFocu[i].style.background = nationalRotationFocuData[i].after;
			}
		}
		nationalRotationFocu[i].onmouseout = ()=>{
			if(nationalIndex!=i){
				nationalRotationFocu[i].style.height = '215px';
				nationalRotationFocu[i].style.background = nationalRotationFocuData[i].before;
			}
		}
		nationalRotationFocu[i].onclick = ()=>{
			nationalAnimate(i);
		}
	}
	let c = 0;
	let nationalAnimateIntervals = null;
	nationalAnimateInterval();
	function nationalAnimateInterval(){
		if(c==5){
			c=-1;
		}
		nationalAnimateIntervals = setInterval(()=>{
			nationalAnimate(++c);
		},5000);
	}
	//门派轮播
	for(let i=0;i<sectsRotationFocu.length;i++){
		sectsRotationFocu[i].getElementsByTagName("div")[0].style.background=sectsRotationFocuData[i].before;
	}
	sectsRotationFocu[0].getElementsByTagName("div")[0].style.background = sectsRotationFocuData[0].after;
	for(let i=0;i<sectsRotationFocu.length;i++){
		sectsRotationFocu[i].getElementsByTagName("div")[0].onmouseover = ()=>{
			if(!sectsRotationStatus){
				sectsAnimate(i);
			}
		}
	}
	let d = 1;//计数器
	setInterval(()=>{
		if(!sectsRotationStatus){
			if(d==sectsRotationFocu.length){
				d=0;
			}
				sectsAnimate(d++);
			}
	},2000);
	//多样玩法轮播
	for(let i=0;i<variousPlayRotationFocu.length;i++){
		variousPlayRotationFocu[i].style.background=variousPlayRotationFocuData[i].before;
	}
	variousPlayRotationFocu[0].style.background = variousPlayRotationFocuData[0].after;
	for(let i = 0;i<variousPlayRotationFocu.length;i++){
		variousPlayRotationFocu[i].onmouseover = ()=>{
			if(variousPlayIndex!=i){
				variousPlayRotationFocu[i].style.background = variousPlayRotationFocuData[i].after;
			}
		}
		variousPlayRotationFocu[i].onmouseout = ()=>{
			if(variousPlayIndex!=i){
				variousPlayRotationFocu[i].style.background = variousPlayRotationFocuData[i].before;
			}
		}
		variousPlayRotationFocu[i].onclick = ()=>{
			if(!variousPlayRotationStatus){
				variousPlayAnimate(i);
			}
		}
	}
	let e = 1;//计数器
	setInterval(()=>{
		if(!variousPlayRotationStatus){
			if(e==variousPlayRotationFocu.length){
				e=0;
			}
				variousPlayAnimate(e++);
			}
	},3000);
	//中间头部右边轮播函数
	function rightAnimate(new_index){
		if(rightIndex==new_index){
			return;
		}
		let rightImgWidth = rightRotation.getElementsByTagName("img")[0].width;//中间头部右边图片宽度
		rightRotationStatus = true;
		for(let i=0;i<rightRotationFocu.length;i++){
			rightRotationFocu[i].className="";
		}
		let rotationHTML = '';//需要轮播的数据
		rotationHTML += '<img src="'+rightRotationData[rightIndex]+'">';
		rotationHTML += '<img src="'+rightRotationData[new_index]+'">';
		rightRotation.innerHTML = rotationHTML;
		rightRotationTransform-=10;
		rightRotation.style.transform = "translateX("+rightRotationTransform+"px)";
		setTimeout(()=>{
			if(Math.abs(rightRotationTransform)<rightImgWidth){
				rightAnimate(new_index);
			}else{
				rightRotation.style.transform = "translateX("+(0-rightImgWidth)+"px)";
				rightIndex = new_index;
				rightRotationTransform = 0;
				rightRotationFocu[rightIndex].className="focu";
				rightRotationStatus = false;
			}
		},30);
	}
	//中间头部中部轮播函数
	function centerAnimate(new_index){
		if(centerIndex==new_index){
			return;
		}
		let centerImgWidth = centerRotation.getElementsByTagName("img")[0].width;//中间头部中部图片宽度
		centerRotationStatus = true;
		for(let i=0;i<centerRotationFocu.length;i++){
			centerRotationFocu[i].className="";
		}
		let rotationHTML = '';//需要轮播的数据
		rotationHTML += '<img src="'+centerRotationData[centerIndex]+'">';
		rotationHTML += '<img src="'+centerRotationData[new_index]+'">';
		centerRotation.innerHTML = rotationHTML;
		centerRotationTransform-=10;
		centerRotation.style.transform = "translateX("+centerRotationTransform+"px)";
		setTimeout(()=>{
			if(Math.abs(centerRotationTransform)<centerImgWidth){
				centerAnimate(new_index);
			}else{
				centerRotation.style.transform = "translateX("+(0-centerImgWidth)+"px)";
				centerIndex = new_index;
				centerRotationTransform = 0;
				centerRotationFocu[centerIndex].className="focu";
				centerRotationStatus = false;
			}
		},30);
	}
	//国风轮播函数
	function nationalAnimate(new_index){
		clearInterval(nationalAnimateIntervals);
		nationalRotationFocu[nationalIndex].style.height = '215px';
		nationalRotationFocu[nationalIndex].style.background = nationalRotationFocuData[nationalIndex].before;
		let html = '<video autoplay muted height="720px"><source type="audio/mp4" src="'+nationalRotationData[new_index]+'"></source></video>';
		nationalRotation.innerHTML = html;
		nationalRotationFocu[new_index].style.height = '284px';
		nationalRotationFocu[new_index].style.background = nationalRotationFocuData[new_index].after;
		nationalIndex = new_index;
		c = new_index;
		nationalAnimateInterval();
	}
	//门派轮播函数
	function sectsAnimate(new_index){
		sectsRotationStatus = true;
		sectsRotationFocu[sectsIndex].getElementsByTagName("div")[0].style.background=sectsRotationFocuData[sectsIndex].before;
		sectsRotationFocu[new_index].getElementsByTagName("div")[0].style.background=sectsRotationFocuData[new_index].after;
		let rotationHTML = '';//需要轮播的数据
		rotationHTML += '<img style="opacity:1;z-index:1;" src="'+sectsRotationData[sectsIndex]+'">';
		rotationHTML += '<img style="opacity:1;z-index:0;" src="'+sectsRotationData[new_index]+'">';
		sectsRotation.innerHTML = rotationHTML;
		sectsOpacity -= 0.05;
		sectsRotation.getElementsByTagName("img")[0].style.opacity = sectsOpacity;
		if(sectsOpacity>0){
			setTimeout(()=>{
				sectsAnimate(new_index)
			},30);
		}else{
			sectsRotation.getElementsByTagName("img")[0].style.opacity = 0;
			sectsOpacity=1;
			sectsIndex = new_index;
			sectsRotationStatus = false;
		}
		
	}
	function variousPlayAnimate(new_index){
		variousPlayRotationStatus = true;
		variousPlayRotationFocu[variousPlayIndex].style.background=variousPlayRotationFocuData[variousPlayIndex].before;
		variousPlayRotationFocu[new_index].style.background=variousPlayRotationFocuData[new_index].after;
		let rotationHTML = '';//需要轮播的数据
		rotationHTML += '<img style="opacity:1;z-index:1;" src="'+variousPlayRotationData[variousPlayIndex]+'">';
		rotationHTML += '<img style="opacity:1;z-index:0;" src="'+variousPlayRotationData[new_index]+'">';
		variousPlayRotation.innerHTML = rotationHTML;
		variousPlayOpacity -= 0.05;
		variousPlayRotation.getElementsByTagName("img")[0].style.opacity = variousPlayOpacity;
		if(variousPlayOpacity>0){
			setTimeout(()=>{
				variousPlayAnimate(new_index)
			},30);
		}else{
			variousPlayRotation.getElementsByTagName("img")[0].style.opacity = 0;
			variousPlayOpacity=1;
			variousPlayIndex = new_index;
			variousPlayRotationStatus = false;
		}
	}
