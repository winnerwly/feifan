$(document).ready(function() {
	//设置轮播图
	var images = $(".carousel ul li");
	var img_l = images.length;
	for(var i = 0; i < img_l; i++) {
		$(".carousel div").append("<span class='pic-a'></span>")
	}
	$(".carousel div").css("margin-left", "-" + $(".carousel div").width() / 2 + "px");
	$(".carousel div").children().eq(0).addClass("active");
	index = 0;
	var time = setInterval(function() {
		images.eq(index).fadeOut(200);
		index = (index + 1) % img_l;
		$(".carousel div").children().removeClass("active").eq(index).addClass("active");
		images.eq(index).fadeIn(200)
	}, 3000);
	//设置课程导航的二级菜单
	var nav = $(".nav-a>ul li");
	var subNav = $(".a-sub-nav>ul>li");
	//点击nav实现subNav的显示与隐藏
	nav.hover(function() {
		nav.removeClass("hover");
		$(this).addClass("hover");
		var inda = $(this).index();
		if(inda > 0) {
			subNav.hide();
			subNav.eq(inda - 1).show()
		} else {
			return
		}
	}, function() {
		nav.removeClass("hover");
		subNav.hide()
	})
	//鼠标离开自身,自身才消失
	subNav.hover(function() {
		var inda = $(this).index();
		nav.eq(inda + 1).addClass("hover");
		$(this).show()
	}, function() {
		nav.removeClass("hover");
		subNav.hide()

	});
	//设置新闻的子页的显示与隐藏
	var newsNav = $(".news-nav li");
	var newsContent = $(".news-content");

	newsNav.mousemove(function() {
		var ind = $(this).index();
		newsNav.removeClass("active");
		$(this).addClass("active");
		newsContent.hide();
		newsContent.eq(ind).show();
	});

	//设置最新开班的切换效果
	var tabKaiban = $(".kaiban1 .kaiban-nav li");
	var kaibanImg = $(".kaiban1 .kaiban-box .kaiban-img");

	tabKaiban.hover(function() {
		var eee = $(this).index();
		if(eee > 0) {
			tabKaiban.removeClass("active").eq(eee).addClass("active");
			kaibanImg.hide().eq(eee - 1).show();
		}
	});
	//设置图片以中心点放大
	var img = $(".kaiban .kaiban-img .img img");
	var imgW = img.width();
	var imgH = img.height();
	imgW2 =1.3*imgW;
	imgH2 =1.3*imgH;
	img.hover(function() {
		$(this).stop().animate({
			height: imgH2,
			width: imgW2,
			left: -0.3*imgW/2+"px",
			top: -0.3*imgH/2+"px"
		},500);
	}, function() {
		$(this).stop().animate({
			height: imgH,
			width: imgW,
			left: "0px",
			top: "0px"
		}, 200);
	});

	//设置今日报名的轮动效果
	var lunbo = $(".kaiban-lunbo ul");
	var lunboLi = $(".kaiban-lunbo ul li");
	lunbo.width(lunboLi.width() * lunboLi.length + "px");
	var lunboWidth = lunbo.width();


	scrollD();
	function scrollD() {
		lunbo.animate({
			"margin-left": (lunboLi.width()+20) * -1 + "px"
		}, 4000, 'linear', function() {
			$(".kaiban-lunbo ul li:eq(0)").appendTo(lunbo);
			lunbo.css({"margin-left": 0});
		})
	};
	var time4=setInterval(scrollD, 4000);
	lunbo.hover(function(){
		lunbo.stop();
		clearInterval(time4);
	},function(){
		lunbo.css({"margin-left": 0});
		scrollD();
		time4=setInterval(scrollD, 4000);
	});
//	lunbo.animate({
//		left: -lunboLi.width() * lunboLi.length + "px"
//	}, 70000, 'linear', function() {
//		lunbo.css("left", "1200px")
//	});
//	setInterval(function() {
//		lunbo.animate({
//			left: -lunboLi.width() * lunboLi.length + "px"
//		}, 70000, 'linear', function() {
//			lunbo.css("left", "1200px")
//		})
//	}, 70000);
	//师资力量部分,教师图片轮播效果

	var teacher = $(".teachers .teacher");
	var teacherLi = $(".teachers .teacher li");
	var tcW = teacherLi.width() + 40;
	var tcW2 = tcW * (-4);
	var tcL = teacherLi.length;
	var tcL2 = parseInt(tcL / 4 + 1);

	var but_tc1 = $(".fa-caret-left");
	var but_tc2 = $(".fa-caret-right");

	teacher.width(tcW * tcL + "px");

	function scroll() {
		$(".teachers .teacher").animate({
			"margin-left": tcW * -1 + "px"
		}, 500, function() {
			$(".teachers .teacher li:eq(0)").appendTo($(".teachers .teacher"));
			$(".teachers .teacher").css({
				"margin-left": 0
			});
		})
	};
	var time1=setInterval(scroll, 3000);
	teacher.hover(function(){
		clearInterval(time1);
	},function(){
		time1=setInterval(scroll, 3000);
	});

	//	aaa=0;
	//	var lunbo=setInterval(function(){
	//			aaa=(aaa+1)%tcL2;
	//			teacher.animate({
	//				left:aaa*tcW2+"px"
	//			},2000)
	//		},8000);
	//学生作品部分
	var tabKaiban2 = $(".student .kaiban-nav li");
	var kaibanImg2 = $(".student .kaiban-box .kaiban-img");

	tabKaiban2.hover(function() {
		var qqq = $(this).index();
		if(qqq > 0) {
			tabKaiban2.removeClass("active").eq(qqq).addClass("active");
			kaibanImg2.hide().eq(qqq - 1).show();
		}
	});
	//就业明星
	var jiuyeMX = $(".jiuyeMX .content ul");
	var jiuyeMXLI = $(".jiuyeMX .content ul li");

	jiuyeMX.width((jiuyeMXLI.width() + 63) * jiuyeMXLI.length);
	bbb = 0;
//	setInterval(function() {
//		bbb = (bbb + 1) % jiuyeMXLI.length;
//		jiuyeMX.animate({
//			left: bbb * (-1) * (jiuyeMXLI.width() + 63) + "px"
//		}, 500)
//	}, 3000);
	
	
	function scrollA() {
		$(".jiuyeMX .content ul").animate({
			"margin-left": (jiuyeMXLI.width() + 63) * -1 + "px"
		}, 500, function() {
			$(".jiuyeMX .content ul li:eq(0)").appendTo($(".jiuyeMX .content ul"));
			$(".jiuyeMX .content ul").css({
				"margin-left": 0
			});
		})
	};
	
	var time2=setInterval(scrollA,2000);
	jiuyeMX.hover(function(){
		clearInterval(time2);
	},function(){
		time2=setInterval(scrollA, 3000);
	});
	
	//合作企业

	var cpUL = $(".cooperate .box .content ul");
	var cpLI = $(".cooperate .box .content ul li");

	cpUL.width(cpLI.width() * cpLI.length + "px");

//	ccc = 0;
//	setInterval(function() {
//		ccc = (ccc + 1) % cpLI.length;
//		cpUL.animate({
//			left: ccc * (-1) * cpLI.width() + "px"
//		}, 500)
//	}, 1000);
	
		function scrollB() {
		cpUL.animate({
			"margin-left": cpLI.width() * -1 + "px"
		}, 500, function() {
			$(".cooperate .box .content ul li:eq(0)").appendTo(cpUL);
			cpUL.css({
				"margin-left": 0
			});
		})
	};
	
	var time3=setInterval(scrollB,1000);
	cpUL.hover(function(){
		clearInterval(time3);
	},function(){
		time3=setInterval(scrollB, 1000);
	});
	
	
	
})