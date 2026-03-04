$(document).ready(function() {
    // Close mobile dropdown on link click
    $('.navbar-nav .nav-link').on('click', function() {
        if ($(window).width() < 992) {
            var $parent = $(this).parent();
            if (!$parent.hasClass('dropdown')) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });

    // Projects carousel
    var $carousel = $('.projects-carousel');
    var $items = $carousel.find('.item');
    var currentIndex = 0;

    function getVisibleCount() {
        var w = $(window).width();
        if (w >= 992) return 3;
        if (w >= 768) return 2;
        return 1;
    }

    function updateCarousel() {
        var visible = getVisibleCount();
        var maxIndex = Math.max(0, $items.length - visible);
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        var percent = currentIndex * (100 / $items.length);
        $carousel.css('transform', 'translateX(-' + percent + '%)');
    }

    $('.carousel-arrow-right').on('click', function() {
        var visible = getVisibleCount();
        var maxIndex = Math.max(0, $items.length - visible);
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    $('.carousel-arrow-left').on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    $(window).on('resize', function() {
        updateCarousel();
    });
});
