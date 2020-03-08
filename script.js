$(function(){
	var doCaoScreen = $(window).height();  
	$('.bg_screen').css("height",doCaoScreen);

	//lấy độ cao của màn hình
	$(window).scroll(function(){
		var viTri = $(document).scrollTop();
		 if(viTri > 200){
		 	$('.navbar').addClass('menu_2');
		 }
		 else if(viTri < 200)
		 {
		 	$('.navbar').removeClass('menu_2');
		 }
		 	
	});
 
	$('.img_1').animate({
 		top:'-90px',
 		left: '-260px', 
	},100);
 	 $('.img_1').css('transform','rotate('+-7+'deg)'); 

	$('.img_2').animate({
 		top:'-150px',
 		right: '-25px', 
	},100);
 	 $('.img_2').css('transform','rotate('+375+'deg)');
 	 $('.img_2').css('transform-origin','bottom');

	$('.img_3').animate({
	 		top:'350px',
	 		left: '-400px', 
		},100);

	
	$('.img_4').animate({
	 		top:'500px',
	 		left:"100px"
		},600 );
	$('.img_4').css('transform','rotate('+-10+'deg)');


	$('.img_5').animate({
	 		top:'585px',
		},1700);
	
	$('.img_6').animate({
			bottom:"200px",
	 		left:'350px'
		},100 );
	$('.img_6').css('transform','rotate('+-51+'deg)');

	$('.img_7').animate({
			bottom:"170px",
	 		left:'455px'
		},100 );
	$('.img_7').css('transform','rotate('+35+'deg)');

	$('.img_8').animate({
			bottom:"50px",
	 		right:'100px'
		},100 );
	$('.img_8').css('transform','rotate('+15+'deg)');

	$('.img_9').animate({
			bottom:"-150px",
	 		right:'-490px'
		},100 );
	$('.img_9').css('transform','rotate('+0+'deg)');
	// end hinh

	$(window).scroll(function(){
		var viTri = $(document).scrollTop();
		 if(viTri > 50){
		 	 
		 }
		 else if(viTri < 50)
		 {
		 	 
		 }
			
	});
});