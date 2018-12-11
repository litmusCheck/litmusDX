// Custom JS file


/* Sticky Nav Function */
    $(window).scroll(function() {
      if ($(document).scrollTop() >= 100) {
          $('.fixed-top').addClass('nav-shrink');
		  //$('header .navbar-header p').css({'top':'-5px','left':'110px','font-size':'12px'});
      } else {
          $('.fixed-top').removeClass('nav-shrink');
          //$('header .navbar-header p').css({'top':'50px','left':'10px','font-size':'14px'});
      }
    });
    $(window).on('load resize orientationchange', function() {
    	if ($(document).scrollTop() >= 50) {
            $('.fixed-top').addClass('nav-shrink');
            //$('header .navbar-header p').css({'top':'-5px','left':'110px','font-size':'12px'});
        } else {
            $('.fixed-top').removeClass('nav-shrink');
            //$('header .navbar-header p').css({'top':'50px','left':'10px','font-size':'14px'});
        }
      });


 
	$(document).ready(function(){
		
		/* ======= File Upload ======= */
		$('.custom-file-input').on('change', function() { 
		   let fileName = $(this).val().split('\\').pop(); 
		   $(this).next('.custom-file-label').addClass("selected").html(fileName); 
		});
		
		/* ======= Number Mask ========*/
		$('.phone-number').mask('0000000000');
		$('.otp').mask('0000');
		
		/* ======= Multiple Select ======= */
	   // $('.js-example-basic-multiple').select2();
	  
	  /* ======= Slide Up Input Label ======= */
 	  
	  $('.form-group input').focus(function(){
		me = $(this) ;
		$("label[for='"+me.attr('id')+"']").addClass("animate-label");
	  }) ;
	  $('.form-group input').blur(function(){
		me = $(this) ;
		if ( me.val() == ""){
		  $("label[for='"+me.attr('id')+"']").removeClass("animate-label");
		}
	  }) ;
	  $('#test-form').submit(function(e){
		e.preventDefault() ;
		alert("Thank you") ;
	  });
	});