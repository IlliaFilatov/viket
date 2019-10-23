$(function() {

    $('.banner').slider({
        prevBtn: ".ctrl-left",
        nextBtn: ".ctrl-right",
        animation: {
            type: "scroll"
        }
    });

    $('.product-slider').slider({
        pagination: {
            paginator: ".pagers"
        }
    });

    $('.tabs-controllers li').click(function() {
        var target = $(this).attr('data-target');
        tabController(target);
    });

    $('[data-menu-trigger]').click(function() {
        var menu = $(this).attr('data-menu-trigger');
        $(menu).slideToggle();
    });

    $("#range").ionRangeSlider({
        type: "double",
        grid: true,
        min: 100,
        max: 700,
        from: 150,
        to: 650,
        prefix: "$"
    });

});

