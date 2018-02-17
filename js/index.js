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
/*
$(function () {
    $('.navbar-collapse ul li>a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'linear');
    });
});
*/
/*----nav js end*/

/*
$(document).ready(function ($) {

  var slideCount = $('.main-slide ul li').length;
	var slideWidth = $('.main-slide ul li').width();
	var slideHeight = $('.main-slide ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.main-slide').css({ width: slideWidth, height: slideHeight });
	$('.main-slide ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('.main-slide ul li:last-child').prependTo('.main-slide ul');
  
  setInterval(function () {
    $('.main-slide ul').animate({
      left: - slideWidth
    }, 200, function () {
      $('.main-slide ul li:first-child').appendTo('.main-slide ul');
      $('.main-slide ul').css('left', '');
    });
  }, 3000);
  
});    
*/
$(function () {
$(".main-slide > div:gt(0)").hide();

setInterval(function () {
    $('.main-slide > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.main-slide');
}, 3000);
    });
/*main slide js end*/
