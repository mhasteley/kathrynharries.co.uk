document.getElementById("gallery-warn").innerHTML = "[Click on the thumbnail to view the full-size image]";

var myImg = $('.gallImg');
var myModal = document.getElementById('modal-content');
var myContent = $('#modal-content');
var myOverlay = $('#modal-overlay');
var myHD = $('.gallHD');
var myClose = $('.modal-close');

$(function() {
    var buttons = $('.square');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function galleryLoad() {
            var galleryId = this.id;
            var gallery = galleryId.substr(1);
            var writeGalleryHD = 'pics/gallery/hd/' + gallery + '.jpg';
            var writeGallery = 'url("pics/gallery/' + gallery + '.jpg")';
            var imgSource = 'http://kathrynharries.co.uk/pics/gallery/' + gallery + '.jpg';
            var img = new Array();
            myContent.removeClass('off');
            myContent.addClass('on');
            myOverlay.removeClass('off');
            myOverlay.addClass('on');
            myModal.style.visibility = "visible";
            img[gallery] = new Image();
            img[gallery].src = imgSource;
            img[gallery].onload = function replaceImg() {
                myModal.style.backgroundImage = writeGallery;
                myImg.removeClass('off');
                myImg.addClass('on');
                myHD.attr('href', writeGalleryHD);
                myHD.css('visibility', 'visible');
                myClose.addClass('on');
                myClose.removeClass('off');
            };
        };
    }
    ;
});

$('button.modal-close').click(function() {
    myImg.addClass('off');
    myImg.removeClass('on');
    myModal.style.backgroundImage = 'url("pics/trans.png")';
    myModal.style.visibility = "hidden";
    myContent.removeClass('on');
    myContent.addClass('off');
    myOverlay.removeClass('on');
    myOverlay.addClass('off');
    myHD.css('visibility', 'hidden');
    myClose.removeClass('on');
    myClose.addClass('off');
});
