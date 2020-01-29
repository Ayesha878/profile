$(document).ready(function()
{
  $(".btn").mouseover(function()
  {
    $(".btn").css("background-color", "#00b386");
  });
  $(".btn").mouseout(function()
  {
    $(".btn").css("background-color", "");
  });
});
/*--------------------------smooth scrolling-----------------------------------*/

$(function() {
    $('.scroll').on('click', function() { //scroll class in the nav-link and buttons link
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, "fast");
            return false;
        }
    });
});

/*-------------------scroll down arrow animation--------------*/
$(document).ready(function()
{
	setInterval(scroll_down,'fast');
});

function scroll_down()
{
   $("#arrow").animate({bottom:'0'}).fadeOut().animate({bottom:'100px'}).fadeIn();
}
/*-------------------*/
