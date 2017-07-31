/*
 * INSERT SVG
 *
 * USAGE
 *
 * $('.element').insertSVG({
 *     iconName   : 'chevron-up',
 *     iconInsert : 'append, prepend, before, after, html',
 *     viewBox    : '0 0 15 15'
 * });
 *
 */

(function($) {
    $.fn.insertSVG = function(options) {

        var settings = $.extend({
            iconName   : '',
            iconInsert : 'append',
            viewBox    : '0 0 15 15'
        }, options );

        var $svg = $('<span class=js-svg-icon>' +
            '<span class=js-svg-icon-wrap>' +
            '<svg viewbox="' + settings.viewBox + '">' +
            '<use xlink:href="./assets/images/icons.svg#icon-' + settings.iconName + '">' +
            '</use></svg></span></span>');

        $(this)[settings.iconInsert]($svg);

        return this;
    };
}(jQuery));
