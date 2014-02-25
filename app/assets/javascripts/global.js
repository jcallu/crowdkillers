jQuery.noConflict();
(function($){ 
	var overlayHeight = function() {
		var overlayHeight = $(window).height() / 2 + $(window).scrollTop() - 80;	
		$('.share-overlay-container').css('top', overlayHeight);	
	}
	$(window).resize(function () { 
		overlayHeight();						   
	});
	$(window).scroll(function () { 
		overlayHeight();						   
	});
	
	$(document).ready(function() {
		$.equalHeight($('.row-a'));
		$.equalHeight($('.row-b'));
		
		$('#nav .nav-media').hover(function(ev) {
			$('#nav .nav-media > a').addClass('hover');
		},function(ev) {
			$('#nav .nav-media > a').removeClass('hover');
		});
		$('.videoimage-thumbnails li:last-child').css('margin', '0 0 1px');
		$('.soundcloud-item-media:first-child').addClass('soundcloud-item-media-first-child');
		$('.rnd-box p:last-child').addClass('rnd-box-p-last-child');
		$('.large-pagination li:last-child').addClass('large-pagination-li-last-child');
		$('.large-pagination li:first-child').addClass('large-pagination-li-first-child');
		$('#header .nav-media ul li:first-child a').addClass('header-nav-media-ul-li-first-child-a');
		$('.nav-module li li:last-child').addClass('nav-module-li-last-child');
		$('.table-1 tr:last-child td').addClass('table-1-tr-last-child-td');
		
		$('.copyright span').hover(function() {
			$('.copyright').css('display', 'none');
			$('.copyright-dark').css('display', 'block');
		});
		$('.copyright-dark').hover(function() {
		}, function() {
			$('.copyright').css('display', 'block');
			$('.copyright-dark').css('display', 'none');
		});
		
		overlayHeight();
	});
})(jQuery);
