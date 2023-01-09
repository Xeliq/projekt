//Przewijanie na górę
jQuery(function($)
{
	$.scrollTo(0);
	$('.scrollup').click(function()
	{ 
		$.scrollTo($('body'), 1000);
	});
});

//Pokaż podczas przewijania
$(window).scroll(function()
{
	if ($(this).scrollTop() > 200)
	{
		$('.scrollup').fadeIn();
		
	}
	else 
	{
		$('.scrollup').fadeOut();
	}
}
);

//Pokazywanie odpowiedniego kafelka
function SelectTile(id)
{
	//Głośność dzwonka
	var volume = 0.2;
	
	var ids = ["aa", "bb", "cc", "dd", "ee", "ff"];
	for (i in ids)
	{
		document.getElementById(ids[i][1].style = "display: none;");
	}
	
	document.getElementById(id[1]).style = "display: block;"
	
	
	//Odegraj przyporządkowany dźwięk
switch (id)
	{
		case "aa":
			var dzwonek = new Audio("res/dzwonek.mp3");
			dzwonek.volume = volume;
			dzwonek.play();
			break;
			
		case "bb":
			var dzwonek = new Audio("res/dzwonek.mp3");
			dzwonek.volume = volume;
			dzwonek.play();
			break;
			
		case "cc":
			var dzwonek = new Audio("res/dzwonek.mp3");
			dzwonek.volume = volume;
			dzwonek.play();
			break;
			
		case "dd":
			var dzwonek = new Audio("res/dzwonek.mp3");
			dzwonek.volume = volume;
			dzwonek.play();
			break;
			
		case "ee":
			var dzwonek = new Audio("res/dzwonek.mp3");
			dzwonek.volume = volume;
			dzwonek.play();
			break;
			
		case "ff":
			var dzwonek = new Audio("res/dzwonek.mp3");
			dzwonek.volume = volume;
			dzwonek.play();
			break;
	}  
}