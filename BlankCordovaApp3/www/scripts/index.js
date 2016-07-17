// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    var url_media = "https://sites.google.com/site/natanmp912912/ping/ping.mp3?attredirects=0&d=1";
    //var my_media = new Media(url_media);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
//        var url_media = "/images/ping.mp3";
        var url_media = "https://sites.google.com/site/natanmp912912/ping/ping.mp3";

        var my_media = new Media(url_media);
        //my_media.play; 
        console.log(my_media);
        document.getElementById("stam button1").onclick = function () { playmedia(my_media) };
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
    function playmedia(media_object) {

        alert("BEFORE MEDIA  2 ");
        media_object.play();
        //ping1.play();
        alert("AFTER MEDIA  ");
    }
} )();