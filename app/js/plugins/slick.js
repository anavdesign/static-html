/*
 * SLICK SLIDER
 *
 * SETTINGS
 * http://tinyurl.com/obldq8l
 */

(function ($) {

    // SVG ICONS
    var $prevBtn = '<div class="slick-button-prev">' +
                   '<svg viewBox="0 0 15 15"><use xlink:href="./assets/images/icons.svg#icon-ui-chevron-left"></use></svg>' +
                   '</div>',
        $nextBtn = '<div class="slick-button-next">' +
                   '<svg viewBox="0 0 15 15"><use xlink:href="./assets/images/icons.svg#icon-ui-chevron-right"></use></svg>' +
                   '</div>';

    /*
     * SINGLE ITEM
     */
    $.fn.slickSingle = function() {
        $(this).addClass('js-slick-single').slick({
            dots: true,
            dotsClass:'slick-button-dots',
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: $prevBtn,
            nextArrow: $nextBtn
        });
        return this;
    };

    /*
     * SLICK CAROUSEL
     */
    $.fn.slickCarousel = function() {
        $(this)
            .addClass('js-slick-carousel')
            .slick({
                dots: false,
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 6,
                dotsClass:'slick-button-dots',
                prevArrow: $prevBtn,
                nextArrow: $nextBtn,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5
                        }
                    }, {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    }, {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }, {
                        breakpoint: 601,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }
                ]
            });
        return this;
    };

    /*
     * SLICK SLIDER WITH THUMBNAILS
     * http://tinyurl.com/jqcbyc6
     */
    $.fn.slickThumbs = function() {
        $(this).each(function(i) {
            var $obj = $(this);

            if($obj.children('div').length > 1) {

                // ADD WRAPPER
                $obj.addClass('js-slick-thumbs__slick')
                    .wrap('<div class="js-slick-thumbs js-slick-thumbs-' + i + ' js-slick-thumbs-container" />')
                    .wrap('<div class=js-slick-thumbs__slick-container />');

                // CLONE SLIDER
                $obj
                    // SELECT PARENT CONTAINER
                    .parent()
                    // CLONE SLIDER
                    .after($obj.parent().clone())
                    // ADD SLIDER CONTAINER CLASS
                    .addClass('js-slick-thumbs__slick--slider')
                    // ADD SLIDER CONTAINER ID
                    .children().attr('id','js-slick-thumbs__slick--slider-' + i)
                    .end()
                    .next()
                    // ADD THUMBS CONTAINER CLASS
                    .addClass('js-slick-thumbs__slick--thumbs')
                    // ADD THUMBS CONTAINER ID
                    .children().attr('id','js-slick-thumbs__slick--thumbs-' + i);

                var $slider = $('#js-slick-thumbs__slick--slider-' + i),
                    $thumbs = $('#js-slick-thumbs__slick--thumbs-' + i);

                // SLICK SLIDER
                $slider.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: false,
                    asNavFor: $thumbs,
                });

                // SLICK THUMBS
                $thumbs.slick({
                    infinite: false,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    asNavFor: $slider,
                    dots: false,
                    focusOnSelect: true,
                    prevArrow: $prevBtn,
                    nextArrow: $nextBtn,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 6
                            }
                        }, {
                            breakpoint: 1000,
                            settings: {
                                slidesToShow: 5
                            }
                        }, {
                            breakpoint: 769,
                            settings: {
                                slidesToShow: 6
                            }
                        }, {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 5
                            }
                        }, {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 4
                            }
                        }, {
                            breakpoint: 400,
                            settings: {
                                slidesToShow: 3
                            }
                        }
                    ]
                });

            }

        });
        return this;
    };

})(jQuery);
