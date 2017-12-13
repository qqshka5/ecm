(function () {
    var mySwiper;
    // var $brand = $(".asset_topLinks-brands .swiper-slide");
    // var maxLength = $brand.eq(0).width();
    //
    // $brand.each(function (index, element) {
    //     var $brand = $(element);
    //
    //     if ($brand.width() > maxLength) {
    //         maxLength = $brand.width();
    //     }
    // });
    //
    // $(".asset_topLinks-brands.swiper-container").width(maxLength);

    mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }

    });

})();

