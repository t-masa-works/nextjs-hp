const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new WOW().init();

$(".drawer-icon").on("click", function (e) {
  e.preventDefault();

  $(".drawer-icon").toggleClass("is-active");
  $(".drawer-content").toggleClass("is-active");
  $(".drawer-background").toggleClass("is-active");
  return false;
});

$(".to-top").hide();
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 500) {
    $(".to-top").show();
  } else {
    $(".to-top").hide();
  }
});

// $('.to-top').on('click', function(){
//   $('body,html').animate({scrollTop: 0 }, 500);
//   return false;
// });

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function () {
  let header = $(".header").innerHeight();
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top - header;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});

$(".header_nav li a").on("click", function () {
  $(".header_nav li a").removeClass("is-active");
  $(this).addClass("is-active");
  return false;
});

$('.qa-box_q').on('click',function(){
  $(this).next().slideToggle();
  $(this).children('.qa-box_icon').toggleClass('is-open');
});

$('.js-close-button').on('click', function(e) {
  e.preventDefault();
  let target = $(this).data('target');
  $(target).hide();
});

$('.js-open-button').on('click', function(e) {
  e.preventDefault();
  let target = $(this).data('target');
  $(target).show();
});