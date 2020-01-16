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

// Youtube playlist by ID
// The playlist ID
const playList = [['I_a0qNp9xxc', 'Nirvana - MTV Interview 09/24/93'], ['1rhotCKLwcQ', 'Kurt Cobain - Nirvana Rare Full Interview'], ['98yQiEtSshs', '60 Minutes NZ Dave Grohl Interview'], ['KCnW6139C40', 'Dave Grohl\'s Mom Virginia Talks About Raising'], ['hJtm9HomKdE', 'Kurt Cobain Talks Music Videos, His Stomach & Frances Bean | MTV News'], ['sSFowuODqqE', 'January 21st, 1993, BMG Ariola Ltda, Rio de Janeiro']];

// Inserting the videos
const elementVideoList = document.getElementById('vid-list');
elementVideoList.innerHTML = "";
elementVideoList.style.width = "" + playList.length * 168 + "px";
playList.forEach((videID, index) => {
    elementVideoList.innerHTML += "<div id=\"video_" + index + "\" class=\"vid-item\" onClick=\"document.getElementById(\'vid_frame\').src=\'https://youtube.com/embed/" + videID[0] + "?autoplay=1&mute=1&enablejsapi=1\'\"><div class=\"thumb\"><img src=\"https://img.youtube.com/vi/" + videID[0] + "/2.jpg\"></div><div class=\"desc\">" + videID[1] + "</div></div>";
});


