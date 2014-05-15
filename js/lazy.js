document.getElementById("gallery-warn").innerHTML = "[Click on the thumbnail to view the full-size image]";

$(function() {
    var buttons = $('.square');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function galleryLoad() {
            var galleryId = 'g' + this.id;
            var gallery = galleryId.substr(2);
            var writeGalleryHD = 'pics/gallery/hd/' + gallery + '.jpg';
            var writeGallery = 'pics/gallery/' + gallery + '.jpg';
            var img = new Array();
            img[gallery] = new Image();
            img[gallery].src = writeGallery;
            img[gallery].onload = function replaceImg() {
                var myImg = document.getElementById(galleryId);
                myImg.src = writeGallery;
                myImg.style.width = "100%";
                myImg.style.height = "auto";
                myImg.style.margin = "0 auto 15px auto";
                $('.gallHD').attr('href', writeGalleryHD);
                $('.md-content').css('opacity', '1');
                $('.md-content').css('background-color', 'rgba(0, 0, 0, 0.4)');
            };
        };
    }
    ;
});

// md-content - remove background while lazy-loading / space HD link - probably need to toggle this...