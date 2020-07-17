$(document).ready(function(){
	$(".slider").slick({
		dots: true,
		arrows: false,
	});
})
$(document).ready(function(){
	$('a[href^="#"], *[data-href^="#"]').on('click', function(e){
		e.preventDefault();
			var t = 1000;
			var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
	$('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
	});
});
$(function() {
	$('.backtotop').click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
	});
});