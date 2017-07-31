/*
 * OFFSET RESIZE
 *
 * USAGE:
 * $.offsetResize({
 *     elmApplyOffset   : '.offset-selector',
 *     elmOffsetHeight1 : '.target-selector',
 *     elmOffsetHeight2 : '.target-selector',
 *     offsetProperty   : 'padding-top'
 * });
 *
 */

(function ($) {
    $.offsetResize = function(options) {

        var settings=$.extend({
            elmApplyOffset   : '',
            elmOffsetHeight1 : '',
            elmOffsetHeight2 : '',
            targetPos        : 'fixed',
            offsetProperty   : 'margin-top'
        }, options );

        var $elmApplyOffset   = $(settings.elmApplyOffset),
            $elmOffsetHeight1 = $(settings.elmOffsetHeight1),
            $elmOffsetHeight2 = $(settings.elmOffsetHeight2),
            elm1Height,
            elm2Height,
            offsetHeight;

        function offsetResize() {
            elm1Height        = $elmOffsetHeight1.outerHeight();
            offsetHeight      = elm1Height;

            if($elmOffsetHeight2.length) {
                elm2Height    = $elmOffsetHeight2.outerHeight();
                offsetHeight  = $elmOffsetHeight1.outerHeight() + $elmOffsetHeight2.outerHeight();
            }

            targetPos = $elmOffsetHeight1.css("position");

            if(targetPos === settings.targetPos) {
                $elmApplyOffset
                    .css(settings.offsetProperty, offsetHeight)
                    .addClass('js-is-offset');
            } else {
                $elmApplyOffset
                    .css(settings.offsetProperty, '0')
                    .removeClass('js-is-offset');
            }

            // DEBUG
            // console.log('###########################');
            // console.log('###########################');
            // console.log('Element To Offset: ' + $elmApplyOffset.attr('id'));
            // console.log('Element 1: ' + $elmOffsetHeight1.attr('id'));
            // console.log('Element 1 Position: ' + targetPos);
            // console.log('Element 1 Height: ' + elm1Height);
            // console.log('Element 2 Height: ' + elm2Height);
            // console.log('Offset Height: ' + offsetHeight);
        }

        // FIRE ON PAGE LOAD
        offsetResize();

        $(window).on("scroll resize", function () {
            offsetResize();
        });

    };
})(jQuery);
