$(function() {
    $('#nav-first ul li').not('.left').click(function() {
        $(this).children('span').addClass('down-line');
        $(this).siblings().children('span').removeClass('down-line');
    })
    $('.btn').click(function() {
        $('#sidebar').animate({
            right: '0px'
        }, 1000);
        $('#black').show();
    });
    $('#black').click(function() {
        $('#sidebar').animate({
            right: '-300px'
        }, 1000)
        $(this).hide();
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#to-head').show();
        } else {
            $('#to-head').hide();
        }
    })
    $('#to-head').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    })
})