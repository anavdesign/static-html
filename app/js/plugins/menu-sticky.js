/*
 * MENU STICKY
 *
 * USAGE:
 * $('.menu').menuSticky();
 *
 */

(function ($) {
    $.fn.menuSticky = function() {

     var $menu       = $(this),
     menuWrapClass   = 'js-menu-sticky-wrapper',
     menuHeightClass = 'js-menu-sticky-height';

        $menu
          .addClass('js-menu-sticky')
          // ADD WRAPPER
          .wrapInner('<div class=' + menuWrapClass + ' />')
          // APPEND MENU HEIGHT PLACEHOLDER
          .append($('<div class=' + menuHeightClass + ' />').css('height',$menu.outerHeight()))
          // TOGGLE STICKY MENU ACTIVE CLASS
          .scrollex({
            leave: function() {
              $('html').addClass('js-menu-sticky-active');
            },
            enter: function() {
              $('html').removeClass('js-menu-sticky-active');
            }
          });

        // UPDATE MENU PLACEHOLDER HEIGHT ON WINDOW RESIZE/SCROLL
        $(window).on("scroll resize", function () {
          var newMenuHeight = $menu.children('.' + menuWrapClass).outerHeight();
          $menu.children('.' + menuHeightClass).css('height',newMenuHeight);
        }).resize();

        return this;

    };
})(jQuery);
