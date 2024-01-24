    $(function () {
        "use strict";

        //=====  button-effect

        $('.from-left').hover(function () {

            $(this).find('span').eq(0).animate({

                width: '100%'

            }, 1000);

        }, function () {

            $(this).find('span').eq(0).animate({

                width: '0'

            }, 1000);

        });

//        start price range

        $("#slider-range").slider({

            range: true,

            min: 0,

            max: 500,

            values: [50, 300],

            slide: function (event, ui) {

                $("#amount").val("BHD" + " " + ui.values[ 0 ] + " - BHD" + " " + ui.values[ 1 ]);

            }

        });

        $("#amount").val("BHD" + " " + $("#slider-range").slider("values", 0) +
                " - BHD" + " " + $("#slider-range").slider("values", 1));


//        start scroll-top

        $(document).ready(function () {

            var scrollButton = $('#scroll-top');

            $(window).on('scroll', function () {

                if ($(this).scrollTop() >= 700) {

                    scrollButton.fadeIn(1000);

                } else {

                    scrollButton.fadeOut(1000);

                }

            });

            scrollButton.on('click', function () {

                $('html, body').animate({scrollTop: 0}, 700);

            });

        });

//        start data-target product

        $('[data-fade]').on('click', function () {

            var index = $('[data-fade]').index(this);

            var selector = $('[data-fade]').eq(index).attr('data-fade');

            $('.one_product').slideUp(500);

            $('#' + selector).slideDown(500);

        });

//        start popup

        $('.show-popup').on('click', function () {

            $('.popup').fadeIn(500);

        });

        $('.popup').on('click', function () {

            $(this).fadeOut(500);

        });

        $('.popup .inner').on('click', function (e) {

            e.stopPropagation();

        });

        $(document).keydown(function (e) {

            if (e.keyCode === 27) {

                $('.popup').fadeOut(500);

            }

        });

//        start counter

        $('.plus').click(function () {

            var index = $('.plus').index(this);

            var quantity = parseInt($('.nomeber').eq(index).val());

            $('.nomeber').eq(index).val(quantity + 1);

        });

        $('.minus').click(function () {

            var index = $('.minus').index(this);

            var quantity = parseInt($('.nomeber').eq(index).val());

            if (quantity > 1) {

                $('.nomeber').eq(index).val(quantity - 1);

            }

        });

        $('.order_details .sangor .delete').on('click', function () {

            var index = $('.order_details .sangor .delete').index(this);

            $('.order_details .sangor').eq(index).fadeOut(500);

        });

//        start toggle chevron

        $('.my-new-order .icon-chevron-down').on('click', function () {

            var index = $('.my-new-order .icon-chevron-down').index(this);

            $('.current-inside').eq(index).slideToggle(500);

        });

        $(".skitter-large").skitter({

            preview: true,

            show_randomly: true,

            focus: true,

            progressbar: true

        });

//        gallery in product-details


        $('.details .gallery .thumbnails img').on('click', function () {

            $('.details .gallery .master-img img').hide().attr('src', $(this).attr('src')).fadeIn(500);

        });

    });

    $(document).ready(function () {

        $('.dropdown-menu .dropdown-item').eq(0);
        $('.dropdown-menu .dropdown-item').eq(1);
        $('.dropdown-menu .dropdown-item').eq(2);
        $('.dropdown-menu .dropdown-item').eq(3);

        $('.dropdown-menu .dropdown-item').on('click', function () {

            $('a#navbarDropdown').prev('a').text($(this).val());

        });

    });

