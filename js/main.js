jQuery(function($) {'use strict',

	// tooltip
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

	// date-piker
      $(function() {
        $( "#datepicker,#datepicker1" ).datepicker();
      });

	// Mobile Menu - Slicknav
	$(document).ready(function(){ 
	    var touch   = $('#resp-menu');
	    var menu    = $('.menu');
	 
	    $(touch).on('click', function(e) {
	        e.preventDefault();
	        menu.slideToggle();
	    });
	    
	    $(window).resize(function(){
	        var w = $(window).width();
	        if(w > 767 && menu.is(':hidden')) {
	            menu.removeAttr('style');
	        }
	    });
	    
	});

	// Carousel
    $(document).ready(function(){
    $('.carousel').carousel({
      interval: 4000
    })
    });   
	
	//Initiat WOW JS
	new WOW().init();

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//////

});


  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    //for datepicker 
    $(document).ready(function() {
      $('#fromdate').datepicker();
      $('#todate').datepicker();
    });

    //radio button
    function yesnoCheck() {
        if (document.getElementById('yesCheck').checked) {
            document.getElementById('ifYes').style.visibility = 'visible';
        }
        else document.getElementById('ifYes').style.visibility = 'hidden';
    }

