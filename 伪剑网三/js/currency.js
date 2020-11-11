window.onload = () => {
	let phoneHTML = ''; //手机注册的HTML
	let personalHTML = ''; //个性注册的HTML
	let rotationData = [
						'../img/xzjp1-2c7c98dc.png.webp',
						'../img/xzjp2-3c4c4d66.png.webp',
						'../img/xzjp3-0af60cf2.png.webp',
						'../img/xzjp4-ffba5428.png.webp'
					   ];//轮播数据
	let index = 0;//轮播下标
	let rotationTransform = 0;//起点偏移量
	let rotationStatus = false;//轮播状态
	let black = document.getElementById("black"); //黑屏
	let loginWindow = document.getElementById("login"); //登录界面
	let registerWindow = document.getElementById("register"); //注册界面
	let header = document.getElementById("header"); //头部
	let login = header.getElementsByClassName("header_right")[0]
					  .getElementsByTagName("ul")[0]
					  .getElementsByTagName("li")[0]; //登录按钮
	let headerRegister = header.getElementsByClassName("header_right")[0]
							   .getElementsByTagName("ul")[0]
							   .getElementsByTagName("li")[1]; //头部注册按钮
	let loginClose = loginWindow.getElementsByClassName("close")[0]; //登录关闭按钮
	let registerClose = registerWindow.getElementsByClassName("close")[0]; //注册关闭按钮
	let registerTitle = registerWindow.getElementsByClassName("left")[0]
									  .getElementsByClassName("title")[0]
									  .getElementsByTagName("span"); //注册方式
	let phoneRegister = registerTitle[0]; //手机注册
	let personalRegister = registerTitle[1]; //个性注册
	let registerContent = registerWindow.getElementsByClassName("left")[0]
										.getElementsByClassName("content")[0];//注册方式切换时需要修改的内容
	let rotation = registerWindow.getElementsByClassName("central_top")[0]
						   		 .getElementsByClassName("right")[0]
						   		 .getElementsByTagName("div")[0]
						   		 .getElementsByTagName("div")[0]
						   		 .getElementsByTagName("div")[0];//轮播
	let rotationFocu = registerWindow.getElementsByClassName("central_top")[0]
						   	   		 .getElementsByClassName("right")[0]
						   	   		 .getElementsByTagName("div")[0]
						   	   		 .getElementsByTagName("div")[0]
						   	   		 .getElementsByTagName("div")[1]
						   	   		 .getElementsByTagName("p");//轮播焦点
	phoneHTML += '<input type="tel " placeholder="输入手机号 "/>';
	phoneHTML += '<p>输入信息获取验证码</p>';
	phoneHTML += '<input type="number" placeholder="短信验证码"/>';
	phoneHTML += '<button>发送手机验证码</button>';
	phoneHTML += '<input type="password" placeholder="密码（8-32位字母/数字/符号组合）"/>';
	phoneHTML += '<div></div>';
	phoneHTML += '<input type="checkbox" />我同意<a target="_blank" href="https://help.xoyo.com/agreement?name=kingsoft-network-service-agreement">金山网络服务使用协议</a>';
	personalHTML += '<input type="text" name="" id="" value="" placeholder="输入账号（首位字母，非邮箱，4-18位）" />';
	personalHTML += '<input type="password" placeholder="密码（8-32位字母/数字/符号组合）"/>';
	personalHTML += '<div></div>';
	personalHTML += '<p>输入信息获取验证码</p>';
	personalHTML += '<input type="tel" placeholder="输入手机号"/>';
	personalHTML += '<input type="number" placeholder="短信验证码"/>';
	personalHTML += '<button>发送手机验证码</button>';
	personalHTML += '根据国家规定请填写真实身份信息，官方会依法保护您的隐私：';
	personalHTML += '<input type="text" name="" id="" value="" placeholder="输入真实姓名" />';
	personalHTML += '<input type="text" name="" id="" value="" placeholder="输入身份证号码" />';
	personalHTML += '<input type="checkbox" />我同意<a target="_blank" href="https://help.xoyo.com/agreement?name=kingsoft-network-service-agreement">金山网络服务使用协议</a>';
	login.onclick = () => {
		black.style.display = "block";
		loginWindow.style.display = "block";
	}
	headerRegister.onclick = () => {
		black.style.display = "block";
		registerWindow.style.display = "block";
	}
	loginClose.onclick = () => {
		black.style.display = "none";
		loginWindow.style.display = "none";
	}
	registerClose.onclick = () => {
		black.style.display = "none";
		registerWindow.style.display = "none";
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
	//轮播
	for(let i=0;i<rotationFocu.length;i++){
		rotationFocu[i].onclick = ()=>{
			if(!rotationStatus){
				animate(i);
			}
		}
	}
	animate(1);
	let j = 2;
	setInterval(()=>{
		if(!rotationStatus){
			if(j==4){
				j=0;
			}
				animate(j++);
			}
	},1000);
	//轮播函数
	function animate(new_index){
		if(index==new_index){
			return;
		}
		let imgWidth = rotation.getElementsByTagName("img")[0].width;//图片宽度
		rotationStatus = true;
		for(let i=0;i<rotationFocu.length;i++){
			rotationFocu[i].className="";
		}
		let rotationHTML = '';//需要轮播的数据
		rotationHTML += '<img src="'+rotationData[index]+'">';
		rotationHTML += '<img src="'+rotationData[new_index]+'">';
		rotation.innerHTML = rotationHTML;
		rotationTransform-=10;
		rotation.style.transform = "translateX("+rotationTransform+"px)";
		setTimeout(()=>{
			if(Math.abs(rotationTransform)<imgWidth){
				animate(new_index);
			}else{
				rotation.style.transform = "translateX("+(0-imgWidth)+"px)";
				index = new_index;
				rotationTransform = 0;
				rotationFocu[index].className="focu";
				rotationStatus = false;
			}
		},30);
	}
}