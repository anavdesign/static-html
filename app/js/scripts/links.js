/*
 * LINKS
 */

(function($) {
    $.links = function() {

        // OPEN ALL EXTERNAL LINKS IN NEW WINDOW
        $('a').filter(function() {
                return this.hostname && this.hostname !== location.hostname;
            }).attr('target', '_blank');

        // DISABLE LINK
        $('.disable-link, a[data-link-disable]').click(function(){
            return false;
        });

    };
}(jQuery));
