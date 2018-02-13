$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
        $('#navbar').fadeIn(500);
    } else {
        $('#navbar').fadeOut(300);
    }
});
/*-----navigation js end*/


$(function () {
    $('.main-button').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800, 'linear');
    });
});
/*-----main-button js end*/

$(function () {
    $('.navbar-collapse ul li>a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'linear');
    });
});
/*----nav js end*/