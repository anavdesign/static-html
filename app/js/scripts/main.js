/*
 * MAIN
 */

(function($) {
  $.main = function() {

    // SVG
    svg4everybody();

    // COLLAPSE
    $('.collapse').collapse();

    // TABS
    $('.tabs').tabs();

    // IMAGE LINKS
    $('a').has('> img').addClass('js-image-link');

    // RESPONSIVE TABLE
    $('.table-responsive, [data-responsive-table]').responsiveTable();

  };
}(jQuery));
