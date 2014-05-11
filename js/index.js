document.getElementById('banner-pic').style.margin = '0 0 -263px 0';

$('#slideshow').cycle({timeout: 3000});


$(window).resize(function() {
    if ($(window).width() < 333) {
        location.reload();
    }
    else {
    }
});