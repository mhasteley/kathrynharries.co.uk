document.getElementById("gallery-warn").innerHTML="";

var buttons = document.getElementsByTagName("button");
for (i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function galleryLoad() {
        var galleryId = 'g' + this.id;
        var gallery = galleryId.substr(2);
        var writeGallery = 'url("pics/gallery/' + gallery + '.jpg")';
        document.getElementById(galleryId).style.backgroundImage = writeGallery;
        document.getElementById(galleryId).style.backgroundSize = "100%";
    };
}

// AJ's lazyload $('div.gallery').each(function(index, value) { $(this).attr('src', $(this).data('src')).removeClass('lazyload'); });