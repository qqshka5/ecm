;(function () {
    var $arrowLeft = $(".asset_slider-controlsContainer .img_arrowLeft");
    var $arrowRight = $(".asset_slider-controlsContainer .img_arrowRight");
    var currentSlide = 0;
    var $slide = $(".asset_slider-slides .asset_slider-slide");
    var slidesNumber = $slide.length;

    $arrowLeft.on("click", shiftLeft);
    $arrowRight.on("click", shiftRight);
    
    function shiftLeft () {
        if (currentSlide === 0) {
            return;
        }
        currentSlide = currentSlide - 1;
        $slide.css("transform", "translateX(-" + 100 * currentSlide + "%)");
    }

    function shiftRight () {
        if (currentSlide >= (slidesNumber - 1)) {
            return;
        }
        currentSlide = currentSlide + 1;
        $slide.css("transform", "translateX(-" + 100 * currentSlide + "%)");
    }


})();