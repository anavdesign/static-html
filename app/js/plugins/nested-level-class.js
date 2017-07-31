/*
 * NESTED LEVEL CLASS
 * see @ http://bit.ly/2sBY73T
 *
 * USAGE:
 * $('.container').nestedLevelClass({
 *   nestedItem  : 'ul',
 *   nestedLeaf  : 'li',
 *   nestedClass : 'js-level-'
 * });
 *
 */

(function ($) {
  $.fn.nestedLevelClass = function(options) {

    var settings=$.extend({
      nestedItem  : 'ul',
      nestedLeaf  : 'li',
      nestedClass : 'menu'
    }, options );

    var nestedClassPrefix = 'js-nested-';

    // ADD LEVEL DEPTH CLASS
    $(this).each(function(){
      $(this).addClass(nestedClassPrefix + settings.nestedClass + ' ' + nestedClassPrefix + settings.nestedClass + '--level-0')
        .find(settings.nestedItem).addClass(function(){

          var $level = parseInt($(this).parents(settings.nestedItem).length);
          $level++;

           return nestedClassPrefix + settings.nestedClass + '--level-'+ $level;
        });
    });

    // ADD LAST LEVEL CLASS
    $(this)
      .find(settings.nestedItem + ':not(:has(' + settings.nestedItem + '))')
      .addClass(nestedClassPrefix + settings.nestedClass + '--level-last');

    return this;

// each leaf that has a child menu item
// add class LAST

  };
})(jQuery);
