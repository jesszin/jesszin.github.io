$(document).ready(function(){
    $('.slider').bxSlider({ auto: true, speed: 500, pause: 2000, mode:'fade', autoControls: true, pager:true, });
});
//slide end
$(".slider").bxSlider({
    onSlideAfter: function(a, o, n){
        var tran_value = 'translate3d('+ ((n+1)*a.parent().parent().width() * -1) +'px , 0px, 0px)';
        $(a).parent().css('-webkit-transform', tran_value);
    }
});

$(function(){
    $('.nav-btn').click(function(){
        $('.nav-btn').hide();
        $('.click').hide();
        $('.author').animate({
            top:"9%"
        },500);
        $('.tag').fadeIn();
        $('.close').fadeIn();
        $('.home-nav').fadeIn();
        $('.slideWrap').css('opacity','1');
        $('.comment').fadeIn();
        $('.main-page').css('width','70%');
        $('.main-page-right').css('width','30%');
    });
});//main animation end

$(function(){
    $('.close').click(function(){
        $('.nav-btn').fadeIn(300);
        $('.click').fadeIn(300);
        $('.author').animate({
            top:"-15%"
        });
        $('.tag').hide();
        $('.close').hide();
        $('.home-nav').hide();
        $('.slideWrap').css('opacity','0');
        $('.comment').hide();
        $('.main-page').css('width','50%');
        $('.main-page-right').css('width','50%');
    });
});//close animation

$(window).load( function() {
    var sbOffset = $('#container').offset().top;

    $(window).scroll(function(){
        var sbOffset = $('#container').offset().top;
        var scrollT = $(window).scrollTop();

        if ( scrollT  > sbOffset ) {
            $('.side-bar').addClass("fixed");
        }
        else if ( scrollT < sbOffset ) {
            $('.side-bar').removeClass("fixed");
        };

        if ( scrollT >= $("#main").offset().top ) {
            $('.side-bar nav ul li a').removeClass("active");
            $(".home").addClass("active");
        };
        if ( scrollT >= $("#portfolio").offset().top ) {
            $('.side-bar nav ul li a').removeClass("active");
            $(".portfolio").addClass("active");
        };
        if ( scrollT >= $("#about").offset().top - 100) {
            $('.side-bar nav ul li a').removeClass("active");
            $(".about").addClass("active");
        };
        if ( scrollT >= $("#contact").offset().top - 600) {
            $('.side-bar nav ul li a').removeClass("active");
            $(".contact").addClass("active");
        };
    });
});//side-bar


$(function() {
    $('a.scroll').bind('click', function(event) {
        if ( $(window).width() < 870 ){
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 10
            }, 1500);
            event.preventDefault();
        }else {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 5
            }, 1500);
            event.preventDefault();
        }
    });
});//smooth scroll

$(function(){
    $('.p1>a').mouseenter(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"100%"
        });
        $('.p1-mt').css('display','block');
    });
    $('.p1>a').mouseleave(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"0"
        });
        $('.p1-mt').css('display','none');
    });//p1
    $('.p2>a').mouseenter(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"100%"
        });
        $('.p2-nextin').css('display','block');
    });
    $('.p2>a').mouseleave(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"0"
        });
        $('.p2-nextin').css('display','none');
    });//p2
    $('.p3>a').mouseenter(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"100%"
        });
        $('.p3-portfolio').css('display','block');
    });
    $('.p3>a').mouseleave(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"0"
        });
        $('.p3-portfolio').css('display','none');
    });//p3
    $('.p4>a').mouseenter(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"100%"
        });
        $('.p4-peter').css('display','block');
    });
    $('.p4>a').mouseleave(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"0"
        });
        $('.p4-peter').css('display','none');
    });//p4
    $('.p5>a').mouseenter(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"100%"
        });
        $('.p5-ngo').css('display','block');
    });
    $('.p5>a').mouseleave(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"0"
        });
        $('.p5-ngo').css('display','none');
    });//p5
    $('.p6>a').mouseenter(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"100%"
        });
        $('.p6-wise').css('display','block');
    });
    $('.p6>a').mouseleave(function(){
        $(this).children('.port-overlay').stop().animate({
            width:"0"
        });
        $('.p6-wise').css('display','none');
    });//p6

});//portfolio hover

//mobile nav