$(document).ready(function(){
	$('.popupClose').click(function(){
		$('.modalPopup').fadeOut();
	});
	$('.box').each(function(index){
		var count = index+1;
		$(this).click(function(){
			$('#popup'+count).fadeIn();
		});
	});
	$('.leftside').addClass("active");
	setTimeout(function(){
		$('.brand-logo').fadeIn();
	
	},1000);
	setTimeout(function(){
		$('.pledge-logo').addClass("active");
	
	},1500);
	setTimeout(function(){
		$('.box1').fadeIn();
	
	},3800);
	setTimeout(function(){
		$('.box2').fadeIn();
	
	},4100);
	setTimeout(function(){
		$('.box3').fadeIn();
	
	},4400);
	setTimeout(function(){
		$('.box4').fadeIn();
	
	},4700);
	setTimeout(function(){
		$('.box5').fadeIn();
	},5000);
});
$(window).resize(function(){
});