/*
 * MENUS
 */

(function($) {
  $.menus = function() {

    /*
     * STICKY MENU
     */
    $('[data-menu-sticky]').menuSticky();

    /*
     * TOUCH FRIENDLY DROP DOWN MENU
     */
    $('[data-menu-expanded]').find('li:has(ul)').doubleTap();

    /*
     * ADD ANCHOR CLASS NAMES
     */
    $('[data-class-names]').anchorClassName();

    /*
     * APPEND EXPANDED ICON
     */
    $('.menu--expanded .menu--expanded__icon').insertSVG({
        iconName : 'ui-chevron-down'
      });
    };

    /*
     * MOBILE MENU SLIDE
     */
    // CONTENT OVERLAY
    var $mmsOverlay = $('<div class="js-mms-overlay" />');
    $mmsOverlay.insertSVG({iconName:'ui-close'}).insertAfter('#layout-navigation');
    // TOGGEL ACTIVE CLASS
    $('#mms-toggle').add($mmsOverlay).click(function() {
      $('html').toggleClass('js-mms-active');
    });

}(jQuery));
