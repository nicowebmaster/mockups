/**
 * Created by Nico on 28/04/2017.
 */

// A $( document ).ready() block.
$( document ).ready(function() {
    lengthLaptop();
    $( window ).resize(function(){
        lengthLaptop();
    });
});

function lengthLaptop(){
    var $wrapperLaptop = $('.wrapper-laptop:visible');
    var heightWrapper = $wrapperLaptop.height();
    var widthWrapper = $wrapperLaptop.width();
    if(widthWrapper > heightWrapper){
        resizeLaptopByHeight(heightWrapper, widthWrapper, $wrapperLaptop);
    }
    else if(heightWrapper > widthWrapper ){
        resizeLaptopByWidth(widthWrapper,$wrapperLaptop);
    }
    resizeWebcamByHeight();
    resizeLensWebcamByWidth();
    resizeByWebcamByNavigator();
}

function resizeLaptopByWidth(width, wrapperLaptopObj){
    var coeff = 1.73;
    var widthLaptop = width - 40;
    var heightLaptop = widthLaptop/coeff;
    wrapperLaptopObj.children(".laptop").css({ height: heightLaptop + 'px'});
    wrapperLaptopObj.children(".laptop").css({width: widthLaptop + 'px'});
}

function resizeLaptopByHeight(height, width, wrapperLaptopObj) {
    var coeff = 1.73;
    var heightLaptop = height - 40;
    var widthLaptop = heightLaptop * coeff;
    if (widthLaptop < width) {
        wrapperLaptopObj.children(".laptop").css({width: widthLaptop + 'px'});
        wrapperLaptopObj.children(".laptop").css({ height: heightLaptop + 'px'});
    }
    else{
        resizeLaptopByWidth(width,wrapperLaptopObj);
    }
}

function resizeWebcamByHeight(){
    var $OuterScreen = $('.outer-screen:visible');
    var heightInnerScreen = $('.inner-screen:visible').height();
    var heightOuterScreen = $OuterScreen.height();
    var widthFrame = (heightOuterScreen - heightInnerScreen) / 2;
    /* var widthFrameThird = widthFrame * 2 / 3; */
    var heightWebcam = widthFrame;
    $OuterScreen.children(".wrapper-webcam").css({height: heightWebcam + 'px'});
}

function resizeLensWebcamByWidth(){
    var $Webcam = $('.wrapper-webcam:visible');
    var width = $Webcam.width();
    var coeff = 7.5;
    var widthWebcam = width / coeff;
    $Webcam.children('.webcam').css({height: widthWebcam + 'px'});
    $Webcam.children('.webcam').css({width: widthWebcam + 'px'});
}

function resizeByWebcamByNavigator(){
    var $MarginTopWebcam = $('.wrapper-webcam:visible');
    var margintop= -6;
    var margintopFirefox = -11;
    if(navigator.userAgent.indexOf("Firefox") != -1){
        $MarginTopWebcam.css("margin-top", margintopFirefox + "p" + "%");
    }
    else{
        $MarginTopWebcam.css("margin-top", margintop + "%");
    }
}
