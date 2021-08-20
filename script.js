

// script for responsive navbar

var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
	if(MenuItems.style.maxHeight == "0px")
	{
		MenuItems.style.maxHeight = "200px";
	}
	else
	{
		MenuItems.style.maxHeight = "0px";
	}
}


// script for go top button--

$(document).ready(function(){

	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$('#gotopbtn').fadeIn();
		} else{
			$('#gotopbtn').fadeOut();
		}

	});

	$("#gotopbtn").click(function(){
		$('html,body').animate({scrollTop : 0},800);
	});
});


// script for fade animation

AOS.init({
	offset: 400,
	duration: 800
});


// scipt for product slide

function imgSlider(anything){
	document.querySelector('.zarzou').src = anything;
}

function changeBgColor(color){
	const sec = document.querySelector('.sec');
	sec.style.background = color;
}

