/*
 * MAGNIFIC POPUP
 *
 * SETTINGS
 * http://tinyurl.com/kjsrqj7
 */

(function($) {

    // VIDEO POPUP
    $.fn.videoPopup = function(options) {

        var settings=$.extend({
            addGallery: ''
        }, options );

        var $container = $('.popup-gallery'),
            $popupGalleries = $container.add(settings.addElements);

        // GALLERY POPUP
        $popupGalleries.each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                  enabled:true
                },
                titleSrc: 'title'
            });
        });
        return this;
    };

    // GALLERY POPUP
    $.fn.galleryPopup = function(options) {

        var settings=$.extend({
            addGallery: ''
        }, options );

        var $container = $('.popup-gallery'),
            $popupGalleries = $container.add(settings.addElements);

        // GALLERY POPUP
        $popupGalleries.each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                  enabled:true
                },
                titleSrc: 'title'
            });
        });
        return this;
    };

    // INLINE POPUP
    $.fn.inlinePopup = function(options) {

        var settings=$.extend({
            addPopup: ''
        }, options );

        var $container    = $('.inline-popup'),
            $inlinePopups = $container.add(settings.addElements);

        $inlinePopups.magnificPopup({
            type: 'inline',
            midClick: true
        });
        return this;
    };

})(jQuery);
