(function ($) {

  $(function() {

    // MENU
    $.menus();

    // LINKS
    $.links();

    // SLICK SLIDERS
    $.slickSlider();

    // MAIN
    $.main();

    // TOUCH
    $.touch();

    var $body = $('body');

    // Disable animations/transitions until the page has loaded.
      $body.addClass('js-is-loading');

      $(window).on('load', function() {
        window.setTimeout(function() {
          $body.removeClass('js-is-loading');
        }, 200);
      });

  });

})(jQuery);
