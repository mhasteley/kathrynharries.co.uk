document.getElementById('banner-pic').style.margin = '0 0 -263px 0';

$('#slideshow').cycle({timeout: 3000});

window.onorientationchange = function() { 
    window.location.reload();
};