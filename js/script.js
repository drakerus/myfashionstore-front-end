$( ".close_menu" ).click(function() {
	
	var widthLeftBlock = $(".left_menu_bl").width() + 30;
	
	if ( $(this).hasClass("isDown") ) {
        $(".left_menu_bl").toggle('slide','left',400);
		$('.container_m').animate({ paddingLeft: widthLeftBlock }, 400);
		$('.select_print_popup').animate({ paddingLeft: widthLeftBlock }, 400);         
		$(this).html("<i class='fa fa-angle-left' aria-hidden='true'></i>"); 
    } else {
        $(".left_menu_bl").toggle('slide','left',400);
		$('.container_m').animate({ padding: "0px" }, 400);
		$('.select_print_popup').animate({ padding: "0px" }, 400);         
		$(this).html("<i class='fa fa-bars' aria-hidden='true'></i>"); 
    }
    $(this).toggleClass("isDown");
    return false;
	
});

$( ".close_menu_mob" ).click(function() {
	$(".header_m .menu_mob ul").toggle('slide',{ direction: "left" },400);
	$(".header_m .pers_bl ul").hide('slide',{ direction: "right" },400);
});

$(".pers_mob").click(function() {
	$(".header_m .pers_bl ul").toggle('slide',{ direction: "right" },400);
	$(".header_m .menu_mob ul").hide('slide',{ direction: "left" },400);
});

$(document).ready(function(){
        var pdiv = $(".f_b");
        pdiv.insertAfter(pdiv.next());
});

jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});

$('.choose_size a').click(function(e){
	e.preventDefault();
	$(this).parent().parent().find(".active").removeClass("active");
	$(this).addClass("active");
});

$('.choose_color a').click(function(e){
	e.preventDefault();
	$(this).parent().parent().find(".active").removeClass("active");
	$(this).addClass("active");
});

$("#change_print_b").click(function(e){
	e.preventDefault();
	
	$("body").css({"overflow": "hidden"});
	$(".select_print_popup").css({"display":"block"});
});

$(".close_select_print").click(function(e){
	e.preventDefault();
	
	$("body").css({"overflow": "auto"});
	$(".select_print_popup").css({"display":"none"});
});


$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true
});


function buttonUp(){
         var valux = $('.sb-search-input').val(); 
            valux = $.trim(valux).length;
            if(valux !== 0){
                $('.sb-search-submit').css('z-index','99');
            } else{
                $('.sb-search-input').val(''); 
                $('.sb-search-submit').css('z-index','-999');
            }
    }
    
    $(document).ready(function(){
        var submitIcon = $('.sb-icon-search');
        var submitInput = $('.sb-search-input');
        var searchBox = $('.sb-search');
        var isOpen = false;
        
        $(document).mouseup(function(){
            if(isOpen == true){
            submitInput.val('');
            $('.sb-search-submit').css('z-index','-999');
            submitIcon.click();
            }
        });
        
        submitIcon.mouseup(function(){
            return false;
        });
        
        searchBox.mouseup(function(){
            return false;
        });
                
        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('sb-search-open');
                isOpen = true;
            } else {
                searchBox.removeClass('sb-search-open');
                isOpen = false;
            }
    });
	
	var windowHeight =$(window).height() - 150;
	var containerHeight =$(".container").height();
	
	if (windowHeight >= containerHeight)  {
		$("html").addClass("fullPage");
		$("body").addClass("fullPage");
		$(".main_block").addClass("fullPage");
		$(".container_m").addClass("fullPage");
		$(".container").addClass("fullPage");
	} else {
		$(".fullPage").removeClass("fullPage");
	}
	
	
	$(window).resize(function() {
          	var windowHeight = $(window).height() - 180;
			
			
			
			if (windowHeight > containerHeight)  {
				$("html").addClass("fullPage");
				$("body").addClass("fullPage");
				$(".main_block").addClass("fullPage");
				$(".container_m").addClass("fullPage");
				$(".container").addClass("fullPage");
			}
			
			if (windowHeight < containerHeight)  {
				$(".fullPage").removeClass("fullPage");
			}
			
    });
	
	window.onload = function () {
		[].forEach.call(document.querySelectorAll('.left_menu_bl'), function (el) {
		  Ps.initialize(el);
		});
	  };

});