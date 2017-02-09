$(document).ready(function() {
	var url = "index.html";
     window.location.replace(url+"#");
});

$(document).ready(function(){
var dr = $("#dropdown4-2");
var dr2 = $("#dropdown4-2 > ul");

	$(dr).mouseover(function(){
		$(dr2).css("top", "0");
		$(dr2).css("left", "110px");
	});
	
});
