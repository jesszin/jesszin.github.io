$(document).ready(function(){
    $('#navicon').click(function(){
        $(this).toggleClass('open');
        $('.navWrap').slideToggle();
    });

});//end