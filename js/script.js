//testing if js is working
document.addEventListener('DOMContentLoaded', function() {
    console.log("Ready to roll!");
}, false);

//animating links bar on scroll
//source: think123 (2017). How do I make a <div> move up and down when I'm scrolling the page?. [online] Stackoverflow.com. Available at: https://stackoverflow.com/questions/1638895/how-do-i-make-a-div-move-up-and-down-when-im-scrolling-the-page [Accessed 31 Jul. 2017].
$(window).scroll(function(){
        $(".links").stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, "fast" );
        });