/*
 * RESPONSIVE TALBES
 *
 */

(function ($) {
    $.fn.responsiveTable = function(options) {
        $(this)
          .each(function(){

            var $table     = $(this),
                $theadTH   = $table.find('> thead th'),
                $tbodyTH   = $table.find('> tbody th'),
                $trow      = $table.find('> tbody > tr'),
                tableClass = 'js-table-responsive';

            $table.addClass(tableClass);

            if($theadTH.length) {
              // console.log('thead');
              $table.addClass(tableClass + '--thead');
            } else if($tbodyTH.length) {
              // console.log('tbody');
              $table.addClass(tableClass + '--tbody');
            }

            $trow
              .addClass(tableClass + '__row')
              .children()
              .addClass(tableClass + '__td')
              .each(function() {

                if($theadTH.length) {

                  // HEADERS IN THEAD
                  var $label = $('<div class="' + tableClass + '__item ' + tableClass + '__label" />'),
                      theadText = $theadTH.eq($(this).index()).text().trim();

                  if(theadText) {
                    $(this)
                      .wrapInner('<div class="' + tableClass + '__item ' + tableClass + '__content" />')
                      .prepend($label.prepend(theadText))
                      .wrapInner('<div class="' + tableClass + '__container" /></div>');
                  }

                } else if($tbodyTH.length) {

                  // HEADER IN TBODY
                  $(this).filter('th')
                  .addClass('js-tbody-header')
                  .siblings().wrapAll('<div class=' + tableClass + '__content />');

                }

              });
          });

        return this;

    };
})(jQuery);
