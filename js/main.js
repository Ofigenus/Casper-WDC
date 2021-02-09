// desctop menu animation 

$(window).load(function(){
	var height = window.innerHeight,
  x= 0, y= height/2,
	curveX = 0,
	curveY = 0,
	targetX = 0,
	xitteration = 0,
	yitteration = 0,
	menuExpanded = false;
	
	blob = $('#blob'),
	blobPath = $('#blob-path'),

	hamburger = $('.hamburger');

	$(this).on('mousemove', function(e){
		x = e.pageX;
		
		y = e.pageY;
	});

	$('.hamburger, .menu-inner').on('mouseenter', function(){
		$(this).parent().addClass('expanded');
		menuExpanded = true;
	});

	$('.menu-inner').on('mouseleave', function(){
		menuExpanded = false;
		$(this).parent().removeClass('expanded');
	});

	function easeOutExpo(currentIteration, startValue, changeInValue, totalIterations) {
		return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
	}

	var hoverZone = 150;
	var expandAmount = 20;
	
	function svgCurve() {
		if ((curveX > x-1) && (curveX < x+1)) {
			xitteration = 0;
		} else {
			if (menuExpanded) {
				targetX = 0;
			} else {
				xitteration = 0;
				if (x > hoverZone) {
					targetX = 0;
				} else {
					targetX = -(((60+expandAmount)/100)*(x-hoverZone));
				}			
			}
			xitteration++;
		}

		if ((curveY > y-1) && (curveY < y+1)) {
			yitteration = 0;
		} else {
			yitteration = 0;
			yitteration++;	
		}

		curveX = easeOutExpo(xitteration, curveX, targetX-curveX, 100);
		curveY = easeOutExpo(yitteration, curveY, y-curveY, 100);

		var anchorDistance = 200;
		var curviness = anchorDistance - 40;

		var newCurve2 = "M60,"+height+"H0V0h60v"+(curveY-anchorDistance)+"c0,"+curviness+","+curveX+","+curviness+","+curveX+","+anchorDistance+"S60,"+(curveY)+",60,"+(curveY+(anchorDistance*2))+"V"+height+"z";

		blobPath.attr('d', newCurve2);

		blob.width(curveX+60);

		hamburger.css('transform', 'translate('+curveX+'px, '+curveY+'px)');
		window.requestAnimationFrame(svgCurve);
	}

	window.requestAnimationFrame(svgCurve);
	
});


// technologies animation on mous over

$('.btn-tech-change').on('mouseover',function(){
	var btnTech = $(this).attr('data-btn');
	
	if (btnTech == 'btn-frontend') {
		$('.techimg[data-tech=frontend]').addClass("tech-zoom").removeClass('tech-zoom-of');

		$('.techimg[data-tech=beck-end]').addClass("tech-zoom-of").removeClass('tech-zoom');
		$('.techimg[data-tech=platforms]').addClass("tech-zoom-of").removeClass('tech-zoom');
	}
	if (btnTech == 'btn-beck-end') {
		$('.techimg[data-tech=beck-end]').addClass("tech-zoom").removeClass('tech-zoom-of');

		$('.techimg[data-tech=frontend]').addClass("tech-zoom-of").removeClass('tech-zoom');
		$('.techimg[data-tech=platforms]').addClass("tech-zoom-of").removeClass('tech-zoom');
	}

	if (btnTech == 'btn-platforms') {
		$('.techimg[data-tech=platforms]').addClass("tech-zoom").removeClass('tech-zoom-of');

		$('.techimg[data-tech=frontend]').addClass("tech-zoom-of").removeClass('tech-zoom');
		$('.techimg[data-tech=beck-end]').addClass("tech-zoom-of").removeClass('tech-zoom');
	}
});

$('.btn-tech-change').on('mouseout',function(){
	$('.techimg').removeClass('tech-zoom-of tech-zoom');
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});