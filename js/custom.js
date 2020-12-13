$(document).ready(function(){
	//navbar bg start here
	$(window).scroll(function(){
	var scrolling=$(this).scrollTop();
		if(scrolling>200){
			$('.btp').fadeIn('500');
		}
		else{
			$('.btp').fadeOut('500');
		}
		if(scrolling>200){
			$('.navbar').addClass('navbar-bg');
		}
		else{
			$('.navbar').removeClass('navbar-bg');
		
		};
			$('.btp').click(function(){
				$('html,body').animate({scrollTop:0},2000)
			});
	
	});
	//navbar bg end here
	//counter-up function
	$('.counter').counterUp({
    delay: 3,
    time: 2500
});
	//feedback-slider
	$('.feedback-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  autoplaySpeed: 2000,
				 responsive: [
    {
      breakpoint: 576,
      settings: {
		slidesToShow: 1,
     		 autoplay: true,
		  autoplaySpeed: 6000,
      }
    },
    {
      breakpoint: 768,
      settings: {
		slidesToShow: 1,
        slidesToShow: 1,
		 autoplay: false,
		  autoplaySpeed: 6000,
      }
    }					 
 ]
});
    //team-slider
	$('.team-slider').slick({
	 slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows:false,
		speed:1000,
		autoplaySpeed: 2000,
		
		//responsive slick-slider
		 responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
			   {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]  
	});
	//animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 80
                }, 1500);
                return false;
            }
        }
    }); 
	    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });    
})