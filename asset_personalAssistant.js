;(function () {
    var popup =  window.document.querySelector('.asset_personalAssistant-popup');
    var enter = window.document.querySelector('.asset_personalAssistant-enter');
    var close = window.document.querySelector('.asset-personalAssistant-close');
    var $popup = window.jQuery(popup);


    enter.addEventListener("click", handleEnterClick);
    close.addEventListener("click", handleCloseClick);

    function handleEnterClick () {
        $popup.addClass('asset_personalAssistant-popup--open');
    }
    function handleCloseClick () {
        $popup.removeClass('asset_personalAssistant-popup--open');
    }
})();