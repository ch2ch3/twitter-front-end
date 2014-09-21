$('document').ready(function(){
	
	$('.tweet-unit').hover(function(){
		$(this).find('.opacity').hide();
		$(this).find('.expand').css('color', '#1988B4')
	}, function(){
		$(this).find('.opacity').show();
		$(this).find('.expand').css('color', '#8999A5')
	});

});