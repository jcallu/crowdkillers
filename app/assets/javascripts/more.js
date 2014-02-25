jQuery.noConflict();
(function($){
	$(document).ready(function() {
		$('.more-info-container').click(function() {
			document.location = $('.more-icon a', this).attr('href');
		});
		$('.more-info-container').hover(function() {
			$('.more-icon a', this).addClass('hover');
		},function() {
			$('.more-icon a', this).removeClass('hover');
		});
	});
})(jQuery);
