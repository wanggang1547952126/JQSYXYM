	let central_top = document.getElementById("central_top");
	let rotation = central_top.getElementsByClassName("bottom_left")[0]
							  .getElementsByTagName("div")[0];//轮播位置
	let li = central_top.getElementsByClassName("bottom_left")[0]
							  .getElementsByTagName("ul")[0]
							  .getElementsByTagName("li");//轮播焦点
	let index = 0;//轮播下标
	let transale = 0;//轮播位移
	let active = document.getElementById("active");
	let active_ul = active.getElementsByClassName("active_left")[0]
				   .getElementsByTagName("ul")[0];//热门活动动画位置
	let active_running = active.getElementsByClassName("active_left")[0]
				   .getElementsByTagName("div")[0]
				   .getElementsByTagName("div")[0]
				   .getElementsByTagName("span")[1];//正在进行
	let active_longtime = active.getElementsByClassName("active_left")[0]
				   .getElementsByTagName("div")[0]
				   .getElementsByTagName("div")[0]
				   .getElementsByTagName("span")[2];//长期活动
	let active_right = active.getElementsByClassName("active_right")[0]
				   .getElementsByTagName("ul")[0]
				   .getElementsByTagName("li");//active右边菜单
	let active_right_html = active.getElementsByClassName("active_right")[0]
								.getElementsByTagName("div")[0];//active右边菜单需要写入的HTML
	let live = document.getElementById("live");
	let live_left_top = live.getElementsByClassName("live_left_top")[0]
							.getElementsByTagName("div")[0]
							.getElementsByTagName("ul")[0]
							.getElementsByTagName("li");//live左边左边菜单
	let live_left_bottom = live.getElementsByClassName("live_left_bottom")[0]//live左边修改的内容
	let live_right_top = live.getElementsByClassName("live_right_top")[0]
							.getElementsByTagName("div")[0]
							.getElementsByTagName("ul")[0]
							.getElementsByTagName("li");//live右边菜单
	let live_right_bottom = live.getElementsByClassName("live_right_bottom")[0]//live右边修改的内容
	let fellow = document.getElementById("fellow");
	let fellow_top = fellow.getElementsByTagName("div")[0]
							.getElementsByTagName("div")[0]
							.getElementsByTagName("span");//同人菜单
	let fellow_bottom = fellow.getElementsByTagName("ul")[0]//同人修改的内容
	//同人菜单点击事件
	for(let i=1;i<fellow_top.length;i++){
		fellow_top[i].onclick = ()=>{
			fellow_top_click(i);
		}
	}
	function fellow_top_click(i){
		let html = '';//写入数据
		for(let i=0;i<live_left_top.length;i++){
			fellow_top[i].className = "";
		}
		switch(i){
			case 1://漫画点击事件
				for(let j=0;j<5;j++){
					html+='<li>';
					html+='<div>';
					html+='<img src="../img/thumb_f72a0994b8512b70631c86d973793890.jpg"/>';
					html+='</div>';
					html+='<p>预约活动开启</p>';
					html+='<div>';
					html+='<span>09-29</span>';
					html+='<span>前往</span>';
					html+='</div>';
					html+='</li>';
				}
				break;
			case 2://音乐点击事件
				for(let j=0;j<5;j++){
					html+='<li>';
					html+='<div>';
					html+='<img src="../img/thumb_48e9cb5f57895e249e056eebe89489ed.jpg"/>';
					html+='</div>';
					html+='<p>预约活动开启</p>';
					html+='<div>';
					html+='<span>09-29</span>';
					html+='<span>前往</span>';
					html+='</div>';
					html+='</li>';
				}
				break;
			case 3://视频点击事件
				for(let j=0;j<5;j++){
					html+='<li>';
					html+='<div>';
					html+='<img src="../img/thumb_dd8f544c5ee4cdf6fde76fa80376121b.jpg"/>';
					html+='</div>';
					html+='<p>预约活动开启</p>';
					html+='<div>';
					html+='<span>09-29</span>';
					html+='<span>前往</span>';
					html+='</div>';
					html+='</li>';
				}
				break;
			case 4://COSPLAY点击事件
				for(let j=0;j<5;j++){
					html+='<li>';
					html+='<div>';
					html+='<img src="../img/thumb_6296346f639cf70b704703d4f864eb7b.jpg"/>';
					html+='</div>';
					html+='<p>预约活动开启</p>';
					html+='<div>';
					html+='<span>09-29</span>';
					html+='<span>前往</span>';
					html+='</div>';
					html+='</li>';
				}
				break;
		}
		fellow_bottom.innerHTML = html;
		fellow_top[i].className="on";
	}
	//热门活动事件
	active_running.onclick = ()=>{
		if(active_ul.style.animation == "active-left2 1s linear forwards"){
			return;
		}
		active_ul.style.animation = "active-left2 1s linear forwards";
		active_running.className = "on";
		active_longtime.className = "";
	}
	active_longtime.onclick = ()=>{
		if(active_ul.style.animation == "active-left1 1s linear forwards"){
			return;
		}
		active_ul.style.animation = "active-left1 1s linear forwards";
		active_running.className = "";
		active_longtime.className = "on";
	}
	//active右边菜单鼠标移入事件
	for(let i=0;i<active_right.length;i++){
		active_right[i].onmouseover = ()=>{
			active_right_mouse(i);
		}
	}
	function active_right_mouse(i){
		let html = '';//写入数据
		for(let i=0;i<active_right.length;i++){
			active_right[i].className = "";
		}
		switch(i){
			case 0://最新点击事件
				html+='<h2>《剑网3》新资料片预约活动开启</h2>';
				html+='<ul>';
				html+='<li>全新充消好礼来袭 《剑网3》“奉天证道”世界首领档案揭秘</li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='</ul>';
				break;
			case 1://新闻点击事件
				html+='<h2>《剑网3》中秋活动经典回归</h2>';
				html+='<ul>';
				html+='<li>飞鼠挂宠萌趣亮相 《剑网3》全新特效外装惊艳全场</li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='</ul>';
				break;
			case 2://活动点击事件
				html+='<h2>《剑网3》新资料片内测资格申请</h2>';
				html+='<ul>';
				html+='<li>《剑网3》新资料片“奉天证道”预约活动开启</li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='</ul>';
				break;
			case 3://公告点击事件
				html+='<h2>江湖再起波澜 年度资料片新剧情探秘</h2>';
				html+='<ul>';
				html+='<li>10月12日1.0.0.3975版本更新内容公告</li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='<li></li>';
				html+='</ul>';
				break;
		}
		active_right_html.innerHTML = html;
		active_right[i].className="on";
	}
	//live左边菜单点击事件
	for(let i=0;i<live_left_top.length;i++){
		live_left_top[i].onclick = ()=>{
			live_left_click(i);
		}
	}
	function live_left_click(i){
		let html = '';//写入数据
		for(let i=0;i<live_left_top.length;i++){
			live_left_top[i].className = "";
		}
		switch(i){
			case 0://推荐点击事件
				for(let j=0;j<8;j++){
					html+='<div>';
					html+='<div>';
					html+='<img src="../img/20200915024040424.png" alt="" />';
					html+='</div>';
					html+='<p>剑网3九月主题大片《人间入味清风调》</p>';
					html+='</div>';
				}
				break;
			case 1://剧情点击事件
				for(let j=0;j<8;j++){
					html+='<div>';
					html+='<div>';
					html+='<img src="../img/20200324024105708.png" alt="" />';
					html+='</div>';
					html+='<p>剑网3九月主题大片《人间入味清风调》</p>';
					html+='</div>';
				}
				break;
			case 2://赛事点击事件
				for(let j=0;j<8;j++){
					html+='<div>';
					html+='<div>';
					html+='<img src="../img/20200324024706959.jpg" alt="" />';
					html+='</div>';
					html+='<p>剑网3九月主题大片《人间入味清风调》</p>';
					html+='</div>';
				}
				break;
			case 3://研发小剧场点击事件
				for(let j=0;j<8;j++){
					html+='<div>';
					html+='<div>';
					html+='<img src="../img/20181126080842480.jpg" alt="" />';
					html+='</div>';
					html+='<p>剑网3九月主题大片《人间入味清风调》</p>';
					html+='</div>';
				}
				break;
		}
		live_left_bottom.innerHTML = html;
		live_left_top[i].className="on";
	}
	//live右边菜单点击事件
	for(let i=0;i<live_right_top.length;i++){
		live_right_top[i].onclick = ()=>{
			live_right_click(i);
		}
	}
	function live_right_click(i){
		let html = '';//写入数据
		for(let i=0;i<live_right_top.length;i++){
			live_right_top[i].className = "";
		}
		switch(i){
			case 0://周一点击事件
				for(let j=0;j<2;j++){
					html+='<div>';
					html+='<div>';
					html+='<div></div>';
					html+='</div>';
					html+='<div>';
					html+='<p>';
					html+='<span>《剑网3》JPL职业联赛</span>';
					html+='<span>19:00</span>';
					html+='</p>';
					html+='<p>小组积分循环赛</p>';
					html+='<div>';
					html+='<img src="../img/20190218045619588.jpg" />';
					html+='<span>剑网3</span>';
					html+='<div>前往</div>';
					html+='</div>';
					html+='</div>';
					html+='</div>';
				}
				break;
			case 1://周二点击事件
				for(let j=0;j<2;j++){
					html+='<div>';
					html+='<div>';
					html+='<div></div>';
					html+='</div>';
					html+='<div>';
					html+='<p>';
					html+='<span>《剑网3》LPL职业联赛</span>';
					html+='<span>19:00</span>';
					html+='</p>';
					html+='<p>小组积分循环赛</p>';
					html+='<div>';
					html+='<img src="../img/20190218045619588.jpg" />';
					html+='<span>剑网3</span>';
					html+='<div>前往</div>';
					html+='</div>';
					html+='</div>';
					html+='</div>';
				}
				break;
			case 2://周三点击事件
				for(let j=0;j<2;j++){
					html+='<div>';
					html+='<div>';
					html+='<div></div>';
					html+='</div>';
					html+='<div>';
					html+='<p>';
					html+='<span>《剑网3》LGM职业联赛</span>';
					html+='<span>19:00</span>';
					html+='</p>';
					html+='<p>小组积分循环赛</p>';
					html+='<div>';
					html+='<img src="../img/20190218045619588.jpg" />';
					html+='<span>剑网3</span>';
					html+='<div>前往</div>';
					html+='</div>';
					html+='</div>';
					html+='</div>';
				}
				break;
			case 3://周四点击事件
				for(let j=0;j<2;j++){
					html+='<div>';
					html+='<div>';
					html+='<div></div>';
					html+='</div>';
					html+='<div>';
					html+='<p>';
					html+='<span>《剑网3》BLG职业联赛</span>';
					html+='<span>19:00</span>';
					html+='</p>';
					html+='<p>小组积分循环赛</p>';
					html+='<div>';
					html+='<img src="../img/20190218045619588.jpg" />';
					html+='<span>剑网3</span>';
					html+='<div>前往</div>';
					html+='</div>';
					html+='</div>';
					html+='</div>';
				}
				break;
			case 4://周五点击事件
				for(let j=0;j<2;j++){
					html+='<div>';
					html+='<div>';
					html+='<div></div>';
					html+='</div>';
					html+='<div>';
					html+='<p>';
					html+='<span>《剑网3》JPL职业联赛</span>';
					html+='<span>19:00</span>';
					html+='</p>';
					html+='<p>小组积分循环赛</p>';
					html+='<div>';
					html+='<img src="../img/20190218045619588.jpg" />';
					html+='<span>剑网3</span>';
					html+='<div>前往</div>';
					html+='</div>';
					html+='</div>';
					html+='</div>';
				}
				break;
			case 5://周六点击事件
				for(let j=0;j<2;j++){
					html+='<div>';
					html+='<div>';
					html+='<div></div>';
					html+='</div>';
					html+='<div>';
					html+='<p>';
					html+='<span>《剑网3》JPL职业联赛</span>';
					html+='<span>19:00</span>';
					html+='</p>';
					html+='<p>小组积分循环赛</p>';
					html+='<div>';
					html+='<img src="../img/20190218045619588.jpg" />';
					html+='<span>剑网3</span>';
					html+='<div>前往</div>';
					html+='</div>';
					html+='</div>';
					html+='</div>';
				}
				break;
			case 6://周日点击事件
				for(let j=0;j<2;j++){
					html+='<div>';
					html+='<div>';
					html+='<div></div>';
					html+='</div>';
					html+='<div>';
					html+='<p>';
					html+='<span>《剑网3》JPL职业联赛</span>';
					html+='<span>19:00</span>';
					html+='</p>';
					html+='<p>小组积分循环赛</p>';
					html+='<div>';
					html+='<img src="../img/20190218045619588.jpg" />';
					html+='<span>剑网3</span>';
					html+='<div>前往</div>';
					html+='</div>';
					html+='</div>';
					html+='</div>';
				}
				break;
		}
		live_right_bottom.innerHTML = html;
		live_right_top[i].className="on";
	}
	//轮播
	function rotationrun (){
		for(let i=0;i<li.length;i++){
			li[i].className = "";
		}
		let html = '';//轮播数据
		html+='<img src="../img/20201009050210438.jpg">';
		html+='<img src="../img/20201009050210438.jpg">';
		rotation.innerHTML = html;
		let imgWidth = rotation.getElementsByTagName("img")[0].width;
		transale-=10;
		rotation.style.transform = "translateX("+transale+"px)";
		if(Math.abs(transale)<imgWidth){
			setTimeout(()=>{
				rotationrun();
			},30);
		}else{
			index++;
			transale=0;
			if(index==5){
				index=0;
			}
			li[index].className="on";
		}
	}
	rotationrun();
	setInterval(()=>{
		rotationrun();
	},3000);
	
