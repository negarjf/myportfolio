jQuery(function($){

	$(window).on('scroll',function(){

		if($(document).scrollTop() > 0){
			$('nav').addClass('navfixed');
		}else{
			$('nav').removeClass('navfixed');
		}
	});

	$('.nav-btn').on('click',function(event){
		event.preventDefault();
		$('.nav-list').slideToggle()
	});

	$('.nav-list a, .custom-btn, .top').on('click',function(event){
		if(this.hash != ""){

			event.preventDefault();
			$('.nav-list').slideUp();
			var hash = this.hash;
			
			$("html, body").animate({
				scrollTop: $(hash).offset().top
			},800, function(){

				window.location.hash=hash;
			});

		} //end if
	});

});