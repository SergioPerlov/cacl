(function ($) {
    "use strict";
    // preloader
    $(window).on("load", function () {
        $(".preloader").fadeOut();
    });

    $(".icon-area").click(function () {
        $(".profile-area").slideToggle(300);
    });
    $(".hide-icon").click(function () {
        $(".profile-area").slideToggle(300);
    });
    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })
    //mouse click

    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });

    // sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 2) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });


    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Slick slider market-place-icon
    $('.slider-area').slick({
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 1000
    });

    // Instantiate Scrolls
			var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

			if (document.querySelector('[data-easing]')) {
				var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});
			}
    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    // WOW active
    new WOW().init();


})(jQuery);
