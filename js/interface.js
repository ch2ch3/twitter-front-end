$('document').ready(function(){

	$('.tweet-container').on('mouseenter', '.tweet-unit', function(){
		$(this).find('.opacity').hide();
		$(this).find('.expand').css('color', '#1988B4')
	});

	$('.tweet-container').on('.mouseleave', '.tweet-unit', function(){
		$(this).find('.opacity').show();
		$(this).find('.expand').css('color', '#8999A5')
	});

	$('.source').hover(function(){
		$(this).find('.name').css('text-decoration', 'underline')
		$(this).find('.name').css('color', '#1988B4')
	}, function(){
		$(this).find('.name').css('text-decoration', 'none')
		$(this).find('.name').css('color', '#000000')
	});

	$('div.retweeted-tweet').hover(function(){
		$(this).find('.retweet-source').css('text-decoration', 'underline')
	}, function() {
		$(this).find('.retweet-source').css('text-decoration', 'none')
	});

	$(window).scroll(function(){
		if($(window).scrollTop() > $(document).height() - $(window).height()){
			setTimeout(getTweets, 700);
			function getTweets(){
				$.get('./data/data.html', function(contents){
					$('.tweet-container').append(contents)
					$('.tweet-container-footer').clone().appendTo('.tweet-container')
					$('.tweet-container-footer:first-of-type').remove()
				}).fail(function(){
					alert('No more tweets.');
				});
			}
		};
	});

});