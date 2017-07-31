/*
 * QUOTES
 *
 * USAGE
 * $('.quotes').quotes();
 *
 */

(function ($) {
    $.fn.quotes = function() {

        var $obj = $(this);

        $obj.each(function(index, element) {
            var text = $(element), content, first, last, trimmed;

            content = text.html().trim().split(/\s+/); // split on spaces
            first   = content.shift();                 // pop the first word
            last    = content.pop();                   // pop the last word
            trimmed = content.join(' ');               // Join

            text.html([' <span class="js-quotes js-quotes-first">', first, '</span> ', trimmed, ' <span class="js-quotes js-quotes-last">', last, '</span>'].join(''));
        });

        return this;

    };
})(jQuery);
