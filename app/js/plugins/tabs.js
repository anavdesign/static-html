/*
 * TABS
 *
 * USAGE:
 * $('elm').tabs({
 *     tab:       '.container',
 *     tabHeader: 'h3.title',
       tabId:     'name'
 * });
 *
 */

(function ($) {

    $.fn.tabs = function(options) {

        var settings=$.extend({
            tab       : '.tab',
            tabHeader : 'h2',
            tabID     : ''
        }, options );

        var $tab  = $(settings.tab),
            $tabs = $('<div class=js-tabs-links><ul /></div>'),
            tabID = settings.tabID;

        // SET TAB ID
        if(tabID === '') {
            tabID = 'tabs';
        } else {
            tabID = tabID + '-tabs';
        }

        $(this).not('.primary').each(function(index) {
            index = index + 1;

            var $container = $(this),
            $item          = $container.children($tab),
            $tabsContent   = $item.wrapAll('<div class=js-tabs-content />').parent(),
            $activeTab     = $item.filter('.active').first();

            // REMOVE MULTIPLE ACTIVE CLASS
            $activeTab.siblings().removeClass('active');

            // SET FIRST TAB ACTIVE CLASS IF NOT DETECTED
            if($activeTab.length === 0) {
                $item.first().addClass('active');
            }

            // TAB CONTAINERS
            $container
                .addClass('js-tabs js-tabs-container js-tabs-' + index)
                .attr('id', 'js-' + tabID + '-' + index);

            // TAB LINKS SETTER
            $tabs.insertBefore($tabsContent)
                .addClass('js-tab-link-list js-tab-link-list-' + index)
                .attr('id', 'js-' + tabID + '-link-list-' + index);

            // TAB ITEMS
            $item.each(function(count) {
                    count = count + 1;

                    var $obj = $(this),
                        $header = $obj.find(settings.tabHeader),
                        labelText = $header.text(),
                        altLabelText = $obj.data('tab-label'),
                        $linkList = $('#js-' + tabID + '-link-list-' + index).children('ul'),
                        isActive = $obj.hasClass('active'),
                        activeClass;

                    $obj
                        // ADD ID
                        .attr('id', 'js-' + tabID + '-' + index + '-' + count)
                        // ADD CLASS
                        .addClass('js-tab')
                        .hide();

                    // ADD ACTIVE CLASS
                    if(isActive) {
                        activeClass = 'js-is-active';
                        $obj
                            .removeClass('active')
                            .addClass(activeClass)
                            .show();
                    }

                    // ALT TAB LABEL
                    if(altLabelText !== undefined) {
                        labelText = altLabelText;
                    }

                    // APPEND LINK TO TAB LINK LIST
                    $('<a />')
                        .appendTo($linkList)
                        .html(labelText)
                        .attr('href','#js-' + tabID + '-' + index + '-' + count)
                        .wrap('<li />')
                        .parent('li')
                        .addClass(activeClass);
                });

        });

        $('.js-tab-link-list a').click(function(event) {
            var $link = $(this),
                linkHref =  $link.attr('href');

            $link.parent('li')
                .addClass('js-is-active')
                .siblings()
                    .removeClass('js-is-active');

            $(linkHref)
                .addClass('js-is-active')
                .show()
                .siblings()
                    .hide()
                    .removeClass('js-is-active');

            return false;
        });

        return this;

    };

})(jQuery);
