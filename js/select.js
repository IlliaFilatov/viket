(function( $ ){

  var defaults = {
        animationIn    : 'fadeIn',
        animationOut   : 'fadeOut',
        modalInSpeed   : 300,
        modalOutSpeed  : 300,
        modalBgInSpeed : 320,
        modalBgOutSpeed : 320
    }

  $.fn.select = function( options ) {

    var settings = $.extend( {
        trigger      : 'hover',
        animation    : 'slide',
        speed        : 300
    }, options);

    return this.each(function(options) {
        console.log($(options.trigger));
        switch(options.trigger) {
            case 'hover':
                $('.select').mouseenter(function() {
                    var select = $(this).find('[data-select]').attr('[data-select]');

                    switch(options.animation) {
                        case 'slide':
                            $(select).slideDown(options.speed, function() {
                                $(this).addClass('active-select');
                            })
                            break;
                        case 'fade':
                            $(select).fadeIn(options.speed, function() {
                                $(this).addClass('active-select');
                            })
                            break;
                        default:
                            console.log('suka blyat nahui');
                    }
                });
                $('.active-select').parent('.select').mouseleave(function() {
                    switch(options.animation) {
                        case 'slide':
                            $(select).slideUp(options.speed, function() {
                                $(this).removeClass('active-select');
                            })
                            break;
                        case 'fade':
                            $(select).fadeOut(options.speed, function() {
                                $(this).removeClass('active-select');
                            })
                            break;
                        default:
                            console.log('suka blyat nahui');
                    }
                });
                break;
            case 'click':
                $('.select').click(function() {
                    var select = $(this).find('[data-select]').attr('[data-select]');

                    switch(options.animation) {
                        case 'slide':
                            $(select).slideToggle(options.speed, function() {
                            })
                            break;
                        case 'fade':
                            $(select).fadeToggle(options.speed, function() {
                            })
                            break;
                        default:
                            console.log('suka blyat nahui');
                    }
                });
                break;
            default:
                console.log('suka blyat');
        }

    });

  };
})( jQuery );
