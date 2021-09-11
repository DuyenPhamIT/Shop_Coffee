$(document).ready(function(){
	$(window).scroll(function(event) {
		var top = $(window).scrollTop();

		if (top >= 200) {
			$('a.back-top').css({
				right:'5px'
			});
		}else{
			$('a.back-top').css({
				right:'-50px'
			});
		}
	});

	$('a.back-top').click(function(event) {
		event.preventDefault();

		$('html,body').animate({scrollTop:0},1000);
	});
});