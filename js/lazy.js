document.getElementById("gallery-warn").innerHTML = "";

$(function() {
    var buttons = $('.square');
    // Replaces below, as the close button was running the lazyload script too:
    // var buttons = document.getElementsByTagName("button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function galleryLoad() {
            var galleryId = 'g' + this.id;
            var gallery = galleryId.substr(2);
            var imgSource = 'http://kathrynharries.co.uk/pics/gallery/' + gallery + '.jpg';
            var writeGallery = 'url("pics/gallery/' + gallery + '.jpg")';
            var img = new Array();
            img[gallery] = new Image();
            img[gallery].src = imgSource;
            img[gallery].onload = function replaceBack() {
                document.getElementById(galleryId).style.backgroundImage = writeGallery;
                document.getElementById(galleryId).style.backgroundSize = "100%";
            };
        };
    }
    ;
});