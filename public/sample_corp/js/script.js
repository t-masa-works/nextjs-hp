const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,//1秒後にスライド
    disableOnInteraction: false,//ユーザーアクション後の自動再生を続ける
  },
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

$(".qa_title p").on("click", function () {
  $(this).toggleClass("is-active");
  $(this).closest(".qa_item").find(".qa_text").toggleClass("js-open");
  return false;
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $(".to-top").fadeIn();
  } else {
    $(".to-top").fadeOut();
  }
});

$(".to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});

$('a[href^="#"]').click(function () {
  let header = $(".header").innerHeight();

  let speed = 300;

  let id = $(this).attr("href");

  let target = $("#" == id ? "html" : id);

  let position = $(target).offset().top - header;

  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});


$('.header_menu-sp a').on('click', function(){
  $('.drawer_bg').addClass('js_open');
  $('.drawer_contents').addClass('js_open');
  return false;
});

$('.drawer_batsu').on('click', function(){
  $('.drawer_bg').toggleClass('js_open');
  $('.drawer_contents').toggleClass('js_open');
  return false;
});

