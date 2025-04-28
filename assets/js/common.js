// JavaScript Document
 $(function (){
   $('#js-hamburger').on('click', function(){
     $('body').toggleClass('is-spMenuOpen');
    });
 });
 // JavaScript Document
 jQuery(".slider").slick({
   dots:true,
   autoplay: true,
   autoplaySpeed: 2000,
   infinite: true,
   slidesToShow: 3,
   centerMode: true,
   centerPadding: "60px",
   prevArrow: '<button type="button" class="slider-arrow prev-arrow"><span></span></button>',
   nextArrow:  '<button type="button" class="slider-arrow next-arrow"><span></span></button>',
   responsive: [{
     breakpoint: 1023,
     settings: {
       centerPadding: "20px",
       slidesToShow: 1
     }
   }]
  });

  // ×をクリックするとフローティングバナー（追従バナー）が閉じる
//window.onload = function () {
//document.getElementById("js_floatingBanner_close").onclick = function () {
    //this.parentNode.classList.add('js_close');
  //};
//}

//バツボタンをクリックした時
$(function() {
  $('.batsu_btn').on('click', function() {
    $('#js_floatingBanner_close').fadeOut(150).addClass('is-hidden');
  });
});
