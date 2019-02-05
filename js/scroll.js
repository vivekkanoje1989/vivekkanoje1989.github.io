$(document).ready(function () {
    setTimeout(() => {
        $('#overlay').hide();
        smoothScroll();
    }, 5000);

    $(window).on( 'scroll', function(){
        let player = $('audio');
        // console.log(player[0].paused);
        if(player[0].paused == false){
            player[0].play();
            // player[0].paused = true;
            // console.log("i paused", player[0].paused);
        }
     });
});
var offsetTop = 0;
function smoothScroll(){
    var bodyHeight = $('body').height();
    // console.log("bodyHeight : ", bodyHeight);
    if(offsetTop >= bodyHeight){
        return false;
    }
    offsetTop += 100;
    $('html, body').animate({
        scrollTop: offsetTop
    }, 1000);
    setTimeout(() => { smoothScroll(); }, 800 );
}
