//testing if js is working
document.addEventListener('DOMContentLoaded', function() {
    console.log("Ready to roll!");
}, false);

//animating links bar on scroll
$(window).scroll(function(){
        $(".links").stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, "fast" );
        });