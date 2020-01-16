// Play youtube video when clicking on any of the list
const playVideo_1 = () => {
    // chrome will not autoplay if the video is not muted
    document.getElementById('vid_frame').src="http://youtube.com/embed/eg6kNoJmzkY?autoplay=1&mute=1&enablejsapi=1"
}

// Getting the identifier of the youtube playlist
document.getElementById('video_1').onclick = playVideo_1;


// jquery
$(document).ready(function () {
    $(".arrow-right").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "+=336"
        }, 750);
    });
    $(".arrow-left").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "-=336"
        }, 750);
    });
});



