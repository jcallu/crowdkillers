jQuery.noConflict();
(function($){ 
	$(document).ready(function() {
		$('#navigation-container .media').hover(function(ev) {
			$('#navigation-container .media > a').addClass('hover');
		},function(ev) {
			$('#navigation-container .media > a').removeClass('hover');
		});
	});
})(jQuery);
