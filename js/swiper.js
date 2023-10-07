var swiper = new Swiper(".bannerSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

var rellax = new Rellax('.rellax');

var mouseSensitivity = 400;

$(document).mousemove(function(event) {
   $(".hero-wrap").css({
     // "top": -event.pageY / 50,
     'background-position-y': -event.pageY / 50,
    //  "left": -event.pageX / 50
     'background-position-x': -event.pageX / 50,
      
   });
});

$(document).mousemove(function(event) {
   $(".hero-wrap").css({
     // "top": -event.pageY / 50,
     'background-position-y': -event.pageY / 50,
    //  "left": -event.pageX / 50
     'background-position-x': -event.pageX / 50,
      
   });
});

var sliders = document.querySelectorAll('.selected');
for (var i = 0; i < sliders.length; ++i) {
  sliders[i].addEventListener('click', function (event) {
     console.log(event.target.src);
      // event.target.classList.add('fullscreen');
      // setTimeout(function() {
      //    galleryTop.update();
      //    galleryThumbs.update();
      // }, 200);
   }, false);
}

var closeButtons = document.querySelectorAll('.close-button');
for (var y = 0; y < closeButtons.length; ++y) {
   closeButtons[y].addEventListener('click', function(event) {
      console.log(event);á                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      var fullScreenElements = document.querySelectorAll('.fullscreen');
      console.log(fullScreenElements);
      for (var x = 0; x < fullScreenElements.length; ++x) {
         fullScreenElements[x].classList.remove('fullscreen');
        //  setTimeout(function() {
        //     galleryTop.update();
        //     galleryThumbs.update();
        //  }, 200);
      }
   });
}

$(document).ready(function() {

  // required elements
  var imgPopup = $('.img-popup');
  var imgCont  = $('.prj-content');
  var popupImage = $('.img-popup img');
  var closeBtn = $('.close-btn');

  // handle events
   imgCont.on('click', function () {
     console.log('111');
    var img_src = $(this).children('img').attr('src');
    imgPopup.children('img').attr('src', img_src);
    imgPopup.addClass('opened');
   });
//    var sliders = document.querySelectorAll('.prj-img');
// for (var i = 0; i < sliders.length; ++i) {
//   sliders[i].addEventListener('click', function (event) {
//      console.log(event.target.src);
//       // event.target.classList.add('fullscreen');
//       // setTimeout(function() {
//       //    galleryTop.update();
//       //    galleryThumbs.update();
//       // }, 200);
//    }, false);
// }

  $(imgPopup, closeBtn).on('click', function() {
    imgPopup.removeClass('opened');
    imgPopup.children('img').attr('src', '');
  });

  popupImage.on('click', function(e) {
    e.stopPropagation();
  });
  
});