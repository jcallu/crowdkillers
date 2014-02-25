jQuery.noConflict();
(function($){ 
	var $callout;
	var curData;
		  
	$(document).ready(function() {
		$callout = $('#callout-overlay .info-inner-container');
	});

	$.setupInfo = function(src, data) {
		$(src).removeAttr('onclick');
		
		var $actionMin = $(src);
		var $actionMax = $('.action-share', $callout);
		
		$actionMin.click(function(ev) {
			ev.preventDefault();
			showCallout($actionMin, data);
		});
		
		$actionMax.click(function(ev) {
			ev.preventDefault();
			$callout.hide();
		});
		
		showCallout($actionMin, data);
		
		return false;
	}

	$.setupInfoDyn = function(src, data) {		
		var $actionMin = $(src);
		var $actionMax = $('.action-share', $callout);
		
		$actionMin.unbind('click');
		$actionMin.click(function(ev) {
			ev.preventDefault();
			showCallout($actionMin, data);
		});
		
		$actionMax.unbind('click');
		$actionMax.click(function(ev) {
			ev.preventDefault();
			$callout.hide();
		});
		
		return false;
	}
	
	$.infoHide = function() {
		$callout.hide();
	}
	
	var showCallout = function($actionMin, data) {
		curData = data;
		var top = $actionMin.offset().top - 10 + (data.y ? data.y : 0);
		var left = $actionMin.offset().left - 152 + (data.x ? data.x : 0);
		$callout.css('top', top + 'px');
		$callout.css('left', left + 'px');
		$('.action-share img', $callout).attr('src', '/templates/sasha/images/actions/minimise-' + data.color + '.png');
		$('.info-inner-content', $callout).html(data.content);
		$callout.show();
	}
})(jQuery);
