/*
 * COLLAPSE
 *
 * USAGE
 *
 * $('.element').collapse({
 * collapseItem  : '.collapse__item',
 * collapseTrigger : '.collapse__trigger',
 * collapseContent : '.collapse__content',
 * iconName    : 'chevron-down'
 * });
 *
 */

(function($) {
  $.fn.collapse = function(options) {

    var settings = $.extend({
      collapseItem    : '.collapse__item',
      collapseTrigger : '.collapse__trigger',
      collapseContent : '.collapse__content',
      classPrefix     : 'js-collapse',
      iconName        : 'ui-chevron-down'
    }, options );

    $(this).addClass(settings.classPrefix).each(function(){

      var $collapseObj     = $(this),
          $collapseTrigger = '';

      // COLLAPSE OBJECT SETTER
      if($collapseObj.is('.collapse--menu')) {

        // ADD COLLAPSE CLASSES
        $collapseObj
          .find('li:has(> ul)').addClass('collapse__item')
          .children('a').wrap('<div class=collapse__trigger>')
          .parent().insertSVG({
            iconName: settings.iconName
          })
          .next('ul.menu').addClass('collapse__content');

        // SET MENU COLLAPSE TRIGGER
        $collapseTrigger = $collapseObj.find(settings.collapseTrigger).children('.js-svg-icon');

        // SET NESTED MENU LEVEL CLASS
        $collapseObj.nestedLevelClass({
          nestedItem  : '.collapse__content',
          nestedLeaf  : '.collapse__item',
          nestedClass : 'collapse'
        });

      } else {
        // SET COLLAPSE TRIGGER
        $collapseTrigger = $collapseObj.find(settings.collapseTrigger);

        $collapseTrigger
          .wrapInner('<span class=' + settings.classPrefix + '__trigger-text />')
          .insertSVG({
            iconName: settings.iconName
          });
      }

      // ADD CLASSES
      $collapseObj
        .find(settings.collapseItem).addClass(settings.classPrefix + '__item').end()
        .find(settings.collapseTrigger).addClass(settings.classPrefix + '__trigger').end()
        .find(settings.collapseContent).addClass(settings.classPrefix + '__content');

      // SET ACTIVE ITEM
      $collapseObj
        // REMOVE ACTIVE CLASS
        .find(settings.collapseItem + '.active').removeClass('active')
        // EXPAND FIRST CHILD WITH ACTIVE CLASS
        .first().addClass('js-is-active').children('.js-collapse__content').show();

      // CLICK FUNCTION
      $collapseTrigger.click(function(event){
        event.preventDefault();
        var $obj = $(this),
          $item  = $obj.closest(settings.collapseItem),
          $content = $item.children(settings.collapseContent);

        if($collapseObj.is('.collapse--accordion')) {

          // COLLAPSE
          if($content.is(':visible')) {
            $content.slideUp(function(){
              $item.removeClass('js-is-active');
            });

          // EXPAND
          } else {
            $content.slideDown();
            $item.addClass('js-is-active');
            $item.siblings().children('.collapse__content').each(function(){
              $(this).slideUp(function(){
                $(this).parent().removeClass('js-is-active');
              });

            });
          }
        } else {

          // COLLAPSE
          if($content.is(':visible')) {
            $content.slideUp(function(){
              $item.removeClass('js-is-active');
            });

          // EXPAND
          } else {
            $content.slideDown();
            $item.addClass('js-is-active');
          }
        }

      });

    });

    return this;
  };
}(jQuery));
