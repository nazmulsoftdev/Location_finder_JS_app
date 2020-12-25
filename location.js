

// MDL Progress Bar with Buffering
(function(){
    document.querySelector('#p3').addEventListener('mdl-componentupgraded', function() {
        this.MaterialProgress.setProgress(33);
        this.MaterialProgress.setBuffer(87);
      });
})();





// background change

function color1(){
 var mybody = document.getElementsByTagName("body")[0];
 mybody.style.backgroundImage='url(image/color1.jpg)';
 mybody.style.backgroundSize='cover';
 mybody.style.repeat='no-repeat';
 mybody.style.backgroundAttachment='fixed'; 
}



function color2(){
  var mybody = document.getElementsByTagName("body")[0];
  mybody.style.backgroundImage='url(image/color2.jpg)';
  mybody.style.backgroundSize='cover';
  mybody.style.repeat='no-repeat';
  mybody.style.backgroundAttachment='fixed'; 
 }

 
function color3(){
  var mybody = document.getElementsByTagName("body")[0];
  mybody.style.backgroundImage='url(image/color3.jpg)';
  mybody.style.backgroundSize='cover';
  mybody.style.repeat='no-repeat';
  mybody.style.backgroundAttachment='fixed'; 
 }

 
function color4(){
  var mybody = document.getElementsByTagName("body")[0];
  mybody.style.backgroundImage='url(image/color4.jpg)';
  mybody.style.backgroundSize='cover';
  mybody.style.repeat='no-repeat';
  mybody.style.backgroundAttachment='fixed'; 
 }

 
function color5(){
  var mybody = document.getElementsByTagName("body")[0];
  mybody.style.backgroundImage='url(image/color5.jpg)';
  mybody.style.backgroundSize='cover';
  mybody.style.repeat='no-repeat';
  mybody.style.backgroundAttachment='fixed'; 
 }

 
function color6(){
  var mybody = document.getElementsByTagName("body")[0];
  mybody.style.backgroundImage='url(image/color6.jpg)';
  mybody.style.backgroundSize='cover';
  mybody.style.repeat='no-repeat';
  mybody.style.backgroundAttachment='fixed'; 
 }

 
function color7(){
  var mybody = document.getElementsByTagName("body")[0];
  mybody.style.backgroundImage='url(image/color7.jpg)';
  mybody.style.backgroundSize='cover';
  mybody.style.repeat='no-repeat';
  mybody.style.backgroundAttachment='fixed'; 
 }

 
function color8(){
  var mybody = document.getElementsByTagName("body")[0];
  mybody.style.backgroundImage='url(image/color8.jpg)';
  mybody.style.backgroundSize='cover';
  mybody.style.repeat='no-repeat';
  mybody.style.backgroundAttachment='fixed'; 
 }

 
function color9(){
  var mybody = document.getElementsByTagName("body")[0];
  mybody.style.backgroundImage='url(image/color9.jpg)';
  mybody.style.backgroundSize='cover';
  mybody.style.repeat='no-repeat';
  mybody.style.backgroundAttachment='fixed'; 
 }

 
function color10(){
  var mybody = document.getElementsByTagName("body")[0];
  mybody.style.backgroundImage='url(image/color10.jpg)';
  mybody.style.backgroundSize='cover';
  mybody.style.repeat='no-repeat';
  mybody.style.backgroundAttachment='fixed'; 
 }


 
// Background setting 

function mySetting(){
  var colorWrap = document.getElementsByClassName("settingWrap")[0];
  colorWrap.style.display='block';
}


//  Close function 

function closeFunction(){
  var colorWrap = document.getElementsByClassName("settingWrap")[0];
  colorWrap.style.display='none';
}





// show Location

var Text1 = document.getElementsByClassName("Text1")[0];
var Text2 = document.getElementsByClassName("Text2")[0];
var progressBar = document.getElementsByClassName("mdl-progress")[0];

function locationShow(){
  progressBar.style.display='block';
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    Text1.innerHTML = "Geolocation is not supported by this browser.";
  }
}

    
function showPosition(position) {

    setTimeout(function(){
      progressBar.style.display='none';
      Text1.innerHTML="Latitude: " + position.coords.latitude; 
    Text2.innerHTML="Longitude: " + position.coords.longitude;
    },3000);
}