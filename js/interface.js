$('document').ready(function(){

	$('.tweet.container').on('mouseenter', '.tweet-unit', function(){
		$(this).find('.opacity').hide();
		$(this).find('.expand').css('color', '#1988B4');
	});

	$('.tweet.container').on('mouseleave', '.tweet-unit', function(){
		$(this).find('.opacity').show();
		$(this).find('.expand').css('color', '#8999A5');
	});

	$('.source').hover(function(){
		$(this).find('.name').css({
			'text-decoration': 'underline',
			'color': '#1988B4'
		})
	}, function(){
		$(this).find('.name').css({
			'text-decoration': 'none',
			'color': '#000000'
		})
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
					$('.tweet.container').append(contents)
					$('#tweet-container-footer').clone().appendTo('.tweet-container')
					$('#tweet-container-footer:first-of-type').remove()
				}).fail(function(){
					alert('No more tweets.');
				});
			}
		};
	});

	$('.profile.compose-tweet-input').on('click', function(){
		$(this).css({
			'height': '79px',
			'margin-bottom': '5px'
		})
		$('.trending').css('top', '425px')
		$('.profile.compose-tweet-submit').css('display', 'inline')
		$('.profile.charcount').show()
		$('.profile.upload-photo').show()
		$('.profile.location').show()
	});

	$('.compose-tweet-input').keyup(function(){
		var max = 140;
		var charactersLeft = max - this.value.length;
		$(this).siblings('.charcount').text(charactersLeft);
		if(this.value.length > 0) {
			$(this).siblings('.compose-tweet-submit').css('opacity', '1.0');
		} else {
			$(this).siblings('.compose-tweet-submit').css('opacity', '0.2');
		}
		
		if(charactersLeft <= 20) {
			$(this).siblings('.charcount').css('color', '#5C0002')
		} if(charactersLeft <= 10) {
			$(this).siblings('.charcount').css('color', '#D40D12')
		} if(charactersLeft > 20) {
			$(this).siblings('.charcount').css('color', '#8899A6')
		}
	});

});