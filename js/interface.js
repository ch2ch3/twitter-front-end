$('document').ready(function(){
	
	$('.tweet-unit').hover(function(){
		$(this).find('.opacity').hide();
	}, function(){
		$(this).find('.opacity').show();
	});

});