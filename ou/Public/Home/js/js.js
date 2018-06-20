$(function () {

     $('.dot').dotdotdot({
        wrap: 'letter',
        watch: 'window'
    });
    $('.carte  li h3').click(function(){
		$(this).toggleClass('on')
		 $(this).next('dl').slideToggle()
	})
});
