document.addEventListener('DOMContentLoaded', function() {

	var mastheadheight = document.querySelector('.ds-header').offsetHeight;
	//console.log(mastheadheight);
	document.querySelectorAll('.ds-banner, .ds-main-section').forEach(function(element) {
		element.style.marginTop = mastheadheight + 'px';
	});

	window.addEventListener('scroll', function() {
		if (window.scrollY >= 10) {
			document.querySelector('.ds-header').classList.add('ds-fixed-header');
		} else {
			document.querySelector('.ds-header').classList.remove('ds-fixed-header');
		}
	});

	// Trigger the scroll event to apply the initial state
	window.dispatchEvent(new Event('scroll'));

});