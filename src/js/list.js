
  window.onload = function() {
   var Div = document.getElementsByClassName("div1")[0];
   var pro = document.getElementsByClassName("container_center")[0];
   var proT = pro.offsetTop;
   var proL = pro.offsetLfet;
   window.onscroll = function() {
    // 获取当前页面的滚动条纵坐标位置
    var scrollT = document.documentElement.scrollTop ;
   // var scrollL = document.documentElement.scrollLeft ||document.body.scrollscrollLeft;
    if (scrollT >= proT) {
      Div.style.position = "fixed";
      Div.style.top = 0;
      Div.style.left = 0;
      Div.style.display = "block";
    } else if(scrollT<= proT){
    	Div.style.display = "none";
    }
}
   
  
//计时器
  function tim(){
	var endtime=new Date("2018/7/5,12:00:00");//结束时间
	var nowtime = new Date();//当前时间
	var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000); 
	d=parseInt(lefttime/3600/24);
	h=parseInt((lefttime/3600)%24);
	m=parseInt((lefttime/60)%60);
	s=parseInt(lefttime%60);
	document.getElementsByClassName("timer")[0].innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
	if(lefttime <= 0){
		document.getElementsByClassName("timer")[0].innerHTML="团购已结束";
		clearInterval(sh);
	}
	document.getElementsByClassName("timer1")[0].innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
	if(lefttime <= 0){
		document.getElementsByClassName("timer1")[0].innerHTML="团购已结束";
		clearInterval(sh);
	}
	document.getElementsByClassName("timer2")[0].innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
	if(lefttime <= 0){
		document.getElementsByClassName("timer2")[0].innerHTML="团购已结束";
		clearInterval(sh);
	}
	document.getElementsByClassName("timer3")[0].innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
	if(lefttime <= 0){
		document.getElementsByClassName("timer3")[0].innerHTML="团购已结束";
		clearInterval(sh);
	}
	document.getElementsByClassName("timer4")[0].innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
	if(lefttime <= 0){
		document.getElementsByClassName("timer4")[0].innerHTML="团购已结束";
		clearInterval(sh);
	}
}
tim()
var sh;
sh=setInterval(tim,1000);

			
	};		