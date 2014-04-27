/*
 
 str="Please visit Microsoft!"
 var n=str.replace("Microsoft","W3Schools");
 document.getElementsByClassName("gallery").id()
 document.getElementsByClassName("gallery");
 for (var i = 0; i < buttons.length; i++)
 document.getElementById("#gallery-grid-"+i).click("gallery"+i);
 
 */



$(document).ready(
        function() {
            $(
                    function() {
                        $('#gallery-grid-1').click(gallery1);
                        $('#gallery-grid-2').click(gallery2);
                        $('#gallery-grid-3').click(gallery3);
                        $('#gallery-grid-4').click(gallery4);
                        $('#gallery-grid-5').click(gallery5);
                        $('#gallery-grid-6').click(gallery6);
                        $('#gallery-grid-7').click(gallery7);
                        $('#gallery-grid-cry29').click(gallerycry29);
                        $('#gallery-grid-cry30').click(gallerycry30);
                        $('#gallery-grid-cry31').click(gallerycry31);
                        $('#gallery-grid-9').click(gallery9);
                        $('#gallery-grid-10').click(gallery10);
                        $('#gallery-grid-11').click(gallery11);
                        $('#gallery-grid-12').click(gallery12);
                        $('#gallery-grid-13').click(gallery13);
                        $('#gallery-grid-14').click(gallery14);
                        $('#gallery-grid-15').click(gallery15);
                        $('#gallery-grid-16').click(gallery16);
                        $('#gallery-grid-17').click(gallery17);
                        $('#gallery-grid-18').click(gallery18);
                        $('#gallery-grid-19').click(gallery19);
                        $('#gallery-grid-20').click(gallery20);
                        $('#gallery-grid-21').click(gallery21);
                        $('#gallery-grid-22').click(gallery22);
                        $('#gallery-grid-23').click(gallery23);
                        $('#gallery-grid-24').click(gallery24);
                        $('#gallery-grid-25').click(gallery25);
                        $('#gallery-grid-26').click(gallery26);
                        $('#gallery-grid-27').click(gallery27);
                        $('#gallery-grid-28').click(gallery28);
                    }
            );

            var gallery1 = function(ev) {
                ev.preventDefault();
                $('#g1').imageloader({background: true});
            };
            var gallery2 = function(ev) {
                ev.preventDefault();
                $('#g2').imageloader({background: true});
            };
            var gallery3 = function(ev) {
                ev.preventDefault();
                $('#g3').imageloader({background: true});
            };
            var gallery4 = function(ev) {
                ev.preventDefault();
                $('#g4').imageloader({background: true});
            };
            var gallery5 = function(ev) {
                ev.preventDefault();
                $('#g5').imageloader({background: true});
            };
            var gallery6 = function(ev) {
                ev.preventDefault();
                $('#g6').imageloader({background: true});
            };
            var gallery7 = function(ev) {
                ev.preventDefault();
                $('#g7').imageloader({background: true});
            };
            var gallerycry29 = function(ev) {
                ev.preventDefault();
                $('#gcry29').imageloader({background: true});
            };
            var gallerycry30 = function(ev) {
                ev.preventDefault();
                $('#gcry30').imageloader({background: true});
            };
            var gallerycry31 = function(ev) {
                ev.preventDefault();
                $('#gcry31').imageloader({background: true});
            };
            var gallery9 = function(ev) {
                ev.preventDefault();
                $('#g9').imageloader({background: true});
            };
            var gallery10 = function(ev) {
                ev.preventDefault();
                $('#g10').imageloader({background: true});
            };
            var gallery11 = function(ev) {
                ev.preventDefault();
                $('#g11').imageloader({background: true});
            };
            var gallery12 = function(ev) {
                ev.preventDefault();
                $('#g12').imageloader({background: true});
            };
            var gallery13 = function(ev) {
                ev.preventDefault();
                $('#g13').imageloader({background: true});
            };
            var gallery14 = function(ev) {
                ev.preventDefault();
                $('#g14').imageloader({background: true});
            };
            var gallery15 = function(ev) {
                ev.preventDefault();
                $('#g15').imageloader({background: true});
            };
            var gallery16 = function(ev) {
                ev.preventDefault();
                $('#g16').imageloader({background: true});
            };
            var gallery17 = function(ev) {
                ev.preventDefault();
                $('#g17').imageloader({background: true});
            };
            var gallery18 = function(ev) {
                ev.preventDefault();
                $('#g18').imageloader({background: true});
            };
            var gallery19 = function(ev) {
                ev.preventDefault();
                $('#g19').imageloader({background: true});
            };
            var gallery20 = function(ev) {
                ev.preventDefault();
                $('#g20').imageloader({background: true});
            };
            var gallery21 = function(ev) {
                ev.preventDefault();
                $('#g21').imageloader({background: true});
            };
            var gallery22 = function(ev) {
                ev.preventDefault();
                $('#g22').imageloader({background: true});
            };
            var gallery23 = function(ev) {
                ev.preventDefault();
                $('#g23').imageloader({background: true});
            };
            var gallery24 = function(ev) {
                ev.preventDefault();
                $('#g24').imageloader({background: true});
            };
            var gallery25 = function(ev) {
                ev.preventDefault();
                $('#g25').imageloader({background: true});
            };
            var gallery26 = function(ev) {
                ev.preventDefault();
                $('#g26').imageloader({background: true});
            };
            var gallery27 = function(ev) {
                ev.preventDefault();
                $('#g27').imageloader({background: true});
            };
            var gallery28 = function(ev) {
                ev.preventDefault();
                $('#g28').imageloader({background: true});
            };
        }
);

function myFunction()
{
    var i = document.getElementsByClassName("gallery")[0];

    function blah() {

        (i.getAttribute("id")).click(gallery + (i.getAttribute("id") - "#gallery-grid-"));

        document.getElementById("demo").innerHTML =
                i.getAttribute("id");
    }
    ;
    var k = "gallery" + (i.getAttribute("id") - "#gallery-grid-");
    var k = function(ev) {
        ev.preventDefault();
        $("#g" + k).imageloader({background: true});
    }
    ;
}
;
