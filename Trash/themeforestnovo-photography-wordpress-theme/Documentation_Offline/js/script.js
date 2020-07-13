$( document ).ready(function() {
	$('.navigation a').click(function(){
		var $el = $($(this).attr('href'));
		var destination = $el.offset().top;
	    $('body, html').animate({ scrollTop: destination }, 1100);
	    return false;
	});

	jQuery('.s-top').on("click", function(){
		jQuery('body, html').animate({ scrollTop: '0' }, 1100); 
		return false;
	});



	jQuery(window).on('load scroll', function() {
		jQuery('.doc-item').each(function(){
			var pos_top = jQuery(this).offset().top,
				height = jQuery(this).height(),
				top = pos_top+height,
				id = jQuery(this).find('.s-top').attr('id');
			if (jQuery(document).scrollTop() > pos_top && jQuery(document).scrollTop() < top) {
				jQuery('a[href="#'+id+'"]').parent().addClass('active');
			} else {
				jQuery('a[href="#'+id+'"]').parent().removeClass('active');
			}
		});
	});

	jQuery('.nav-button').on("click", function(){
		if (jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active');
			jQuery('.header,.main-container').removeClass('active');
		} else {
			jQuery(this).addClass('active');
			jQuery('.header,.main-container').addClass('active');
		};
	});
});