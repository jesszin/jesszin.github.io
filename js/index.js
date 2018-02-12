$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
        $('#navbar').fadeIn(500);
    } else {
        $('#navbar').fadeOut(300);
    }
});
/*-----navigation js end*/


$(function () {
    $('a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'linear');
    });
});

/*-----main-button js end*/

