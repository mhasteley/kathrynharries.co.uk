document.getElementById("gallery-warn").innerHTML = "";

$(function() {
    var buttons = $('.square');
    // Replaces this, as the close button was running the lazyload script too:
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

/* Attempting the same thing in JQuery...
 $('button').click(function as() {
 $(this).attr('id', function asd(bIndex, bValue) {
 var galleryId = '"#g' + bValue + '"';
 $(galleryId).each(function(gIndex, gValue) {
 var writeGallery = 'url("pics/gallery/' + galleryId + '.jpg")';
 $(this).css('backgroundImage', writeGallery);
 });
 });
 });
 */

// AJ's lazyload $('div.gallery').each(function(index, value) { $(this).attr('src', $(this).data('src')).removeClass('lazyload'); });