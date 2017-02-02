$(document).ready(function(){
    $(this).scrollTop(0);
});

$(document).ready(function(){
var dr = $("#dropdown4-2");
var dr2 = $("#dropdown4-2 > ul");

	$(dr).mouseover(function(){
		$(dr2).css("top", "0");
		$(dr2).css("left", "110px");
	});
	
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.fadeScroll').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $("#maintenance").animate({'opacity':'1'},2000);
                $("#pmaintenance").animate({'opacity':'1'},2000);
				
				$("#util").animate({'opacity':'1'},3000);
                $("#putil").animate({'opacity':'1'},3000);
				
				$("#transaction").animate({'opacity':'1'},4000);
                $("#ptransaction").animate({'opacity':'1'},4000);
				
				$("#reports").animate({'opacity':'1'},5000);
                $("#preports").animate({'opacity':'1'},5000);
                    
            }
            
        }); 
    
    });
    
});