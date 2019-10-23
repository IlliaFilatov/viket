function tabController(target) {

    $('.tabs-controllers li').removeClass('active-controller');
    $('[data-target="'+target+'"]').addClass('active-controller');

    $('.tabs .active-tab').slideUp(400, showNextTab());

    function showNextTab() {

        $('.tabs .tab').removeClass('active-tab');
        $(target).slideDown(400, function() {
            $(this).addClass('active-tab');
        });

    }

};


