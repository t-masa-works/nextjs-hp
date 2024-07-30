$("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  $("#js-drawer-icon").toggleClass("is-checked");
  $("#js-drawer-content").toggleClass("is-checked");
});

// // java-script
// const drawerIcon = document.querySelector("#js-drawer-icon")
// const drawerContent = document.querySelector("#js-drawer-content")
// // javascriptの場合は、エラー時の処理も書かないとエラーの場合後続の処理も反応しなくなる
// if (drawerIcon) {
// drawerIcon.addEventListener("click", function(e){
//   e.preventDefault();
//   drawerIcon.classList.toggle("is-checked");
//   drawerContent.classList.toggle("is-checked");
// });
// }

$(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideDown();
  }
});


const swiper = new Swiper('#js-gallery-swiper', {
  spaceBetween: 82,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '#js-gallery-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '#js-gallery-next',
    prevEl: '#js-gallery-prev',
  },

});


$(".js-modal-open").on("click", function(e){
  e.preventDefault();

  $("#js-about-modal")[0].showModal();
});

$(".js-modal-close").on("click", function(e){
  e.preventDefault();

  $("#js-about-modal")[0].close();
});

// javascript(modalの開閉)
// const modalOpenItems = document.querySelectorAll(".js-modal-open");
// const modalCloseItems = document.querySelectorAll(".js-modal-close");
// const aboutModal = document.querySelector("#js-about-modal");

// modalOpenItems.forEach(function(modalOpenItem){
//   modalOpenItem.addEventListener("click", function(e){
//     e.preventDefault();

//     if(aboutModal) {
//       aboutModal.showModal();
//     }
//   });
// });

// modalCloseItems.forEach(function(modalCloseItem) {
//   modalCloseItem.addEventListener("click",function(e) {
//     e.preventDefault();

//     if(aboutModal) {
//       aboutModal.close();
//     }
//   })
// });

$('#js-drawer-content a[href^="#"]').on("click",function(e) {
  $("#js-drawer-icon").removeClass("is-checked");
  $("#js-drawer-content").removeClass("is-checked");
});

$('a[href^="#"]').on("click",function(e) {
  const speed = 300;
  const id = $(this).attr("href");
  const target = $("#" == id ? "html" : id);
  const position = $(target).offset().top;
  $("html,body").animate(
    {
    scrollTop: position,
    },
    speed,
    "swing" // swing or linear
  );
});

// $(window).on("scroll", function() {
//   if(300 < $(window).scrollTop()) {
//     $("#js-pagetop").addClass("is-show");
//   } else {
//     $("#js-pagetop").removeClass("is-show");
//   }
// });

const pageTop = document.querySelector("#js-pagetop")
window.addEventListener("scroll", function() {
  if(300 < this.window.scrollY) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});

const intersectionObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry) {
    if(entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
        //一度表示させたら表示しっぱなしにするなら下記分岐は削除する
      entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");

inViewItems.forEach(function(inViewItem) {
  intersectionObserver.observe(inViewItem);
});