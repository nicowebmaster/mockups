/**
 * Created by Nico on 01/06/2017.
 */

const ColorBlock = $('.container');

var index = 0;
var param = "";
var param2 = "";
var t;
var tab = new Array();

$( document ).ready(function() {
	LengthChildrenMain('.container');
	Scroll();
});
   
function LengthChildrenMain(param) {
	$(param).each(function (index) {
		tab[index] = $('.main').children(param);
		alert(tab[index]);
	});
}

function Scroll(){
	var t = tab[0].offset().top - 100;
	var t1 = tab[1].offset().top - 100;
	var t2 = tab[2].offset().top - 100;
	var t3 = tab[3].offset().top - 100;

    $(document).scroll(function() {
		if ($(this).scrollTop() > t3) {
			$('header').css({"background-color": "grey"});
		}
		else if ($(this).scrollTop() > t2) {
        	$('header').css({"background-color": "#520833"});
		}
		else if ($(this).scrollTop() > t1) {
         	$('header').css({"background-color": "blue"});
        }
		else if ($(this).scrollTop() > t) {
        	$('header').css({"background-color": "green"});
		}
        if ($(this).scrollTop()=== 0){
         	 $('header').css({"background-color": "pink"});
        }
	});
}
	// var t = $('#block1').offset().top - 100;
    // var t1 = $('#block2').offset().top - 100;
   // var t2 = $('#block3').offset().top - 100;
    // var t3 = $('#block4').offset().top - 100;

    // $(document).scroll(function() {

        // if ($(this).scrollTop() > t3) {
            // $('header').css({"background-color": "grey"});
        // }
        // else if ($(this).scrollTop() > t2) {
            // $('header').css({"background-color": "#520833"});
        // }
        // else if ($(this).scrollTop() > t1) {
            // $('header').css({"background-color": "blue"});
        // }
        // else if ($(this).scrollTop() > t) {
            // $('header').css({"background-color": "green"});
        // }
        // if ($(this).scrollTop()=== 0){
            // $('header').css({"background-color": "pink"});
        // }
    // });
// });