let jsOpen = document.querySelector("#js-drawer");
let jsDrawer = document.querySelector(".header_drawer");

jsOpen.addEventListener("click", () => {
  jsOpen.classList.toggle("is-open");
  jsDrawer.classList.toggle("is-open");
  return false;
});

$(".qa_box-q").on("click", function () {
  $(this).next().slideToggle();
  $(this).children(".qa_box-icon").toggleClass("is-open");
  $(this).toggleClass("is-open");
});


const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoHeight: true,
  spaceBetween: 500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 3000,
  },
  speed: 3000,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

$(".top_info").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
});
