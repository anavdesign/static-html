/*
 * ANCHOR CLASS NAME
 * Add Class Names to Menu Items
 * Add Wrapper to Each Word In Anchor Text
 *
 * USAGE:
 * $('elm').anchorClassName({
 *      selector: '.leaf',
 *      insertMethod: 'prepend'
 * });
 *
 */

(function ($) {
    $.fn.anchorClassName = function(options) {

      var settings=$.extend({
          selector    : '.leaf',
          insertMethod: 'prepend'
      }, options );

      $(this).each(function() {

        var $menu  = $(this),
            menuID = $menu.attr('id');

        $menu.find(settings.selector).children('a').each(function(){
            var $anchor         = $(this),
                anchorText      = $.trim($anchor.text()),
                anchorClassName = anchorText.replace(/\s+/g, '-').toLowerCase(),
                anchorWords     = anchorText.split(' '),
                space           = '';

            if(anchorText !== '') {

                // ADD LINK TEXT TO CLASS
                $anchor.parent('li').addClass('js-' + menuID + '-' + anchorClassName + ' ' + 'js-' + anchorClassName);

                // ADD SPAN WRAPPER TO MENU ANCHOR TEXT
                $anchor.empty().append('<span class=js-anchor-text />');

                // WRAP EACH WORD IN SPAN
                $.each(anchorWords, function(i, v) {
                    if (i >= 1) { space = ' '; }
                    $anchor.children('span').append($('<span>').text(space + v));
                });
            }

        });

      });

      return this;

    };
})(jQuery);
