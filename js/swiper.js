var swiper = new Swiper(".bannerSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var rellax = new Rellax('.rellax');

var mouseSensitivity = 400;

$('.hero-wrap.banner').mousemove(function(event) {
   $(".hero-wrap.banner").css({
     // "top": -event.pageY / 50,
     'background-position-y': -event.pageY / 50,
    //  "left": -event.pageX / 50
     'background-position-x': -event.pageX / 50,
      
   });
});

$('.hero-wrap-2').mousemove(function(event) {
  var width = screen.availWidth;
  var height = screen.availHeight;
  var offsetX = 0.5 - event.pageX/width;
  var offsetY = 0.5 - event.pageY / height;
  
  var minion1 = document.getElementsByClassName("minion1")[0];
  var offset1=parseInt(minion1.dataset.offset);
  var translate = "translate3d(" + Math.round(offset1*offsetX)+"px ,"+ Math.round(offset1*offsetY) +"px , 0)";
  minion1.style.transform = translate;

  var minion2 = document.getElementsByClassName("minion2")[0];
  var offset2=parseInt(minion2.dataset.offset);
  var translate = "translate3d(" + Math.round(offset2*offsetX)+"px ,"+ Math.round(offset2*offsetY) +"px , 0)";
  minion2.style.transform = translate;

  var minion3 = document.getElementsByClassName("minion3")[0];
  var offset3=parseInt(minion3.dataset.offset);
  var translate = "translate3d(" + Math.round(offset3*offsetX)+"px ,"+ Math.round(offset3*offsetY) +"px , 0)";
  minion3.style.transform = translate;

  var minion4 = document.getElementsByClassName("minion4")[0];
  var offset4=parseInt(minion4.dataset.offset);
  var translate = "translate3d(" + Math.round(offset4*offsetX)+"px ,"+ Math.round(offset4*offsetY) +"px , 0)";
  minion4.style.transform = translate;
});

$('#contact').mousemove(function(event) {
  var width = screen.availWidth;
  var height = screen.availHeight;
  var offsetX = 0.5 - event.pageX / width;
  var offsetY = 0.5 - (event.pageY/6) / height;
  var minion1 = document.getElementsByClassName("minion1")[0];
  var offset1=parseInt(minion1.dataset.offset);
  var translate = "translate3d(" + Math.round(offset1*offsetX)+"px ,"+ Math.round(offset1*offsetY) +"px , 0)";
  minion1.style.transform = translate;

  var minion3 = document.getElementsByClassName("minion3")[0];
  var offset3=parseInt(minion3.dataset.offset);
  var translate = "translate3d(" + Math.round(offset3*offsetX)+"px ,"+ Math.round(offset3*offsetY) +"px , 0)";
  minion3.style.transform = translate;
});

$('.contact.ftco-counter').mousemove(function(event) {
  var width = screen.availWidth;
  var height = screen.availHeight;
  var offsetX = 0.5 - event.pageX / width;
  var offsetY = 0.5 - (event.pageY/6) / height;
  var minion1 = document.getElementsByClassName("minion1")[1];
  var offset1=parseInt(minion1.dataset.offset);
  var translate = "translate3d(" + Math.round(offset1*offsetX)+"px ,"+ Math.round(offset1*offsetY) +"px , 0)";
  minion1.style.transform = translate;

  var minion3 = document.getElementsByClassName("minion3")[1];
  var offset3=parseInt(minion3.dataset.offset);
  var translate = "translate3d(" + Math.round(offset3*offsetX)+"px ,"+ Math.round(offset3*offsetY) +"px , 0)";
  minion3.style.transform = translate;
});

$(document).mousemove(function(event) {
  var width = screen.availWidth;
  var height = screen.availHeight;
  var offsetX = 0.5 - event.pageX / width;
  var offsetY = 0.5 - event.pageY / height;
  var minion = document.getElementsByClassName("minion");
  for (let index = 0; index < minion.length; index++) {
    const element = minion[index];
    var offset=parseInt(element.dataset.offset);
    var translate = "translate3d(" + Math.round(offset*offsetX)+"px ,"+ Math.round(offset*offsetY) +"px , 0)";
    element.style.transform = translate;
  }
});

$(document).scroll(function () {
	scrollPos = $(this).scrollTop();
  var height = screen.availHeight;
  $('.svg-like').css({
    'animation': (scrollPos - (height / 3)) * 2 / height > 0 ? 'fadeInUp 1s ease-in-out' : 'fadeOutDown 1s ease-in-out 1',
    'animation-fill-mode': 'forwards'
  });
  $('.svg-ht').css({
    'animation': (scrollPos - (height / 2.5)) * 2 / height > 0 ? 'fadeInUp 1s ease-in' : 'fadeOutDown 1s ease-in',
    'animation-fill-mode': 'forwards'
    
  });
  $('.svg-heart').css({
    'animation': (scrollPos - (height / 1.25)) * 2 / height > 0 ? 'fadeInUp 1s ease-in-out' : 'fadeOutDown 1s ease-in-out 1',
    'animation-fill-mode': 'forwards'
    
  });
  $('.svg-design').css({
    'animation': (scrollPos - (height * 1.1)) * 2 / height > 0 ? 'fadeInUp 1s ease-in-out' : 'fadeOutDown 1s ease-in-out 1',
    'animation-fill-mode': 'forwards'
    
   });
   $('.svg-chart').css({
     'animation': (scrollPos - (height * 1.1)) * 2 / height > 0 ? 'fadeInUp 1s ease-in-out' : 'fadeOutDown 1s ease-in-out 1',
    'animation-fill-mode': 'forwards'
     
   });
  $('.svg-smile').css({
    'animation': (scrollPos - (height * 2.1)) * 2 / height > 0 ? 'fadeInUp 1s ease-in-out' : 'fadeOutDown 1s ease-in-out 1',
    'animation-fill-mode': 'forwards'
    
	});
});