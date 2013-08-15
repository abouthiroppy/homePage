// $(document).ready(function() {  
// 	$('a.link').click(function () {  
// 	    $('#wrapper').scrollTo($(this).attr('href'), 800);
// 	    setPosition($(this).attr('href'), '#cloud1', '0px', '400px', '800px', '1200px')
// 	    setPosition($(this).attr('href'), '#cloud2', '0px', '800px', '1600px', '2400px')
// 	    $('a.link').removeClass('selected');  
// 	    $(this).addClass('selected');
// 	    return false;  
// 	});  
// });

function setPosition(check, div, p1, p2, p3, p4) {
	if(check==='#box1')
	{
	    $(div).scrollTo(p1, 800);
	}
	else if(check==='#box2')
	{
	    $(div).scrollTo(p2, 800);
	}
	else if(check==='#box3')
	{
	    $(div).scrollTo(p3, 800);
	}
	else
	{
	    $(div).scrollTo(p4, 800);
	}
};
