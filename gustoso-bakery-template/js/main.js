$(function() {

		$('.hamburger__box').click(function(){
			$('.toggle-transform').toggle();
			$('.hamburger__box').toggleClass('hamburger-active').clearQueue();
			$('.hamburger__box').clearQueue();
		});


		$(window).resize(function(){
			var wWidth = $(window).width();
			if(wWidth > 768){
				$('.toggle-transform').removeAttr('style');
			}
		});

		$('.main-board__carousel').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<a class="main-board__button-left" href="#"><img src="img/arrow-left.png" alt="arrow"></a>',
			nextArrow: '<a class="main-board__button-right" href="#"><img src="img/arrow-right.png" alt="arrow"></a>',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						arrows: false
					}
				}
			]
		});

    $('a').click(function(e){
    	e.preventDefault();
    });

});
