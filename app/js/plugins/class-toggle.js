/*
 * CLASS TOGGLE
 *
 * USAGE:
 * $('elm').classToggle({
 *      targetElm:   '', // Target Element
 *      toggleClass: ''  // Target Element Class Name
 * });
 *
 */

(function ($) {
    $.fn.classToggle = function(options) {

        var settings=$.extend({
            targetElm: '', // Target Element
            className: ''  // Target Element Class Name
        }, options );

        // TOGGLE CLASS
        $(this).click(function() {
            $(settings.targetElm).toggleClass(settings.className);
        });

        return this;

    };
})(jQuery);
