var slideIndex = 0;
var timer;
var cont = $(".content");

playSlides();

function playSlides() 
{
	
    var x = document.getElementsByClassName("slides");
    var page = document.getElementsByClassName("curr");
	
    for (i = 0; i < x.length; i++) //logic in this loop is to hide all the pictures that're existing in var x(which is class slides);
    {
       x[i].style.display = "none";  
    }
	
    slideIndex++; //increments in number for the picture to adjust each time
	
    if (slideIndex > x.length) // the condition here is when the slideIndex number is greater than 5, then slideIndex will reset to 1
	{	
		slideIndex = 1;
	}
	
    for(i=0;i<page.length;i++)
	{
	     page[i].className = page[i].className.replace(" pager-color","");
	}
	
	page[slideIndex-1].className+=" pager-color";
	x[slideIndex-1].style.display = "block";
	
    timer = setTimeout(playSlides, 4000);
	
    slowFade();
}

function showImg(n){
	var x = document.getElementsByClassName("slides");
	var page = document.getElementsByClassName("curr");
	
	if(n > x.length)
	{
		slideIndex=1;
	}
	
	if(n < 1)
	{
		slideIndex = x.length;
	}
	
	for(i=0;i<x.length;i++)
	{
		x[i].style.display="none";
	}
	
	for(i=0;i<page.length;i++)
	{
		page[i].className = page[i].className.replace(" pager-color","");
	}
	
	x[slideIndex-1].style.display = "block";	
	page[slideIndex-1].className+=" pager-color";
}

function nextImg(n)
{	
	fastFade();
	showImg(slideIndex += n);
	clearTimeout(timer);
	timer = setTimeout(playSlides, 4000);
	slowFade();
}

function currentDiv(n)
{
	fastFade();
	showImg(slideIndex=n);
	clearTimeout(timer);
	timer = setTimeout(playSlides, 4000);
	slowFade();
}

function onPlay()
{
	slowFade();
	clearTimeout(timer);
	timer = setTimeout(playSlides, 4000);
}

function onPause()
{
	
	$(".content").css({'opacity':'1'});		
	cont.stop();
	timer = clearTimeout(timer);
}

function slowFade()
{
	cont.stop(true);	
	$(document).ready(function(){
        $(cont).fadeIn(1000, function(){
        $(this).fadeOut(3000);
        });
   });
}

function fastFade()
{
	cont.stop(true);	
    	$(document).ready(function(){
        $(cont).css({'opacity': '0'});
	$(cont).animate({opacity: 1});
   });
    
}
