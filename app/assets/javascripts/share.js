jQuery.noConflict();
(function($){ 
	var $callout;
	var curData;
		  
	$(document).ready(function()
	{		
		$callout = $('.share-overlay');
		
		$('li a', $callout).click(function(ev) {
			ev.preventDefault();
			var type = $(this).parent().attr('class');
			var _title = encodeURIComponent(curData.title);
			var _url = encodeURIComponent(curData.url);
			switch(type) {
				case 'favourites' :
					bookmarkSite(curData.title, curData.url);
					break;
				case 'digg' :
					popup(type, 'http://digg.com/submit?phase=2&url=' + _url + '&title=' + _title);
					break;
				case 'facebook' :
					popup(type, 'http://www.facebook.com/sharer.php?u=' + _url + '&t=' + _title);
					break;
				case 'twitter' :
					popup(type, 'http://twitter.com/home?status=' + encodeURIComponent('Currently reading ' + curData.title + ' ' + curData.tinyUrl + ' on DJ Sasha website @sashaofficial'));
					break;
				case 'google' :
					popup(type, 'http://www.google.com/buzz/post?url=' + _url);
					break;
				case 'delicious' :
					popup(type, 'http://www.delicious.com/save?v=5&noui&jump=close&url=' + _url + '&title=' + _title);
					break;
				case 'myspace' :
					popup(type, 'http://www.myspace.com/auth/loginform?dest=' + encodeURIComponent('http://www.myspace.com/Modules/PostTo/Pages/default.aspx?u=' + _url));
					break;
			}
		});
	});

	$.setupShare = function(src, data) {
		$(src).removeAttr('onclick');
		
		var $btnShare = $(src);
		var $btnClose = $('.close-tr', $callout);
		
		$btnShare.click(function(ev) {
			ev.preventDefault();
			showCallout($btnShare, data);
		});
		
		$btnClose.click(function(ev) {
			ev.preventDefault();
			$callout.hide();
		});
		
		showCallout($btnShare, data);
		
		return false;
	}
	
	$.setupShareDyn = function(src, data) {		
		var $btnShare = $(src);
		var $btnClose = $('.close-tr', $callout);
		
		$btnShare.unbind('click');
		$btnShare.click(function(ev) {
			ev.preventDefault();
			showCallout($btnShare, data);
		});
		
		$btnClose.unbind('click');
		$btnClose.click(function(ev) {
			ev.preventDefault();
			$callout.hide();
		});
		
		return false;
	}
	
	$.shareHide = function() {
		$callout.hide();
	}
	
	var showCallout = function($btnShare, data) {
		curData = data;
		$callout.show();
	}	
	
	var bookmarkSite = function(title, url) {
		if (window.sidebar) // firefox
			window.sidebar.addPanel(title, url, "");
		else if(window.opera && window.print){ // opera
			var elem = document.createElement('a');
			elem.setAttribute('href',url);
			elem.setAttribute('title',title);
			elem.setAttribute('rel','sidebar');
			elem.click();
		} 
		else if(document.all)// ie
			window.external.AddFavorite(url, title);
	}
	
	var popup = function(name, url) {
		var width = 800;
		var height = 480;
		var left = (screen.width  - width) / 2;
		var top = (screen.height - height) / 2;
		var params = 'width=' + width + ', height=' + height;
		params += ', top=' + top + ', left=' + left;
		params += ', directories=no';
		params += ', location=yes';
		params += ', menubar=yes';
		params += ', resizable=yes';
		params += ', scrollbars=yes';
		params += ', status=yes';
		params += ', toolbar=yes';
		newwin = window.open(url, name, params);
		if (window.focus) { newwin.focus() }
	}

})(jQuery)h
