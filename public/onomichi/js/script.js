//about無限ループスライド
const aboutSwiper = new Swiper(".about_swiper", {
  loop: true,
  slidesPerView: 9,
  spaceBetween: 10,
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
});

//spotsスライド
var spotSwiper = new Swiper(".spot_swiper", {
  loop: true,
  slidesPerView: 1.35,
  spaceBetween: 15,
  centeredSlides: true, // アクティブなスライドを中央にする

  breakpoints: {
    600: {
      slidesPerView: 2.6,
      centeredSlides: true,
    },
    900: {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 20,
    },
    1204: {
      slidesPerView: 3.25,
      centeredSlides: false,
      spaceBetween: -300,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//dialogでのmodal表示
$(".js-modal-open").on("click", function (e) {
  e.preventDefault();

  let target = $(this).data("target");
  $("#" + target)[0].showModal();
  $("html, body").css("overflow", "hidden");
});

//dialogで表示したmodalの閉じるボタンを押した時の挙動
$(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  $(this).parents(".js-prize-modal")[0].close();
  $("html,body").css("overflow", "auto");
});

//headerのdrawerの開閉
$(".js-open").on("click", function (e) {
  e.preventDefault();

  $(".drawer-icon").toggleClass("is-active");
  $(".header_drawer").toggleClass("is-active");
  return false;
});

//ページの一番上まで戻る
$(".page-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
  return false;
});

//トップへ戻るボタンの表示非表示
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".page_top-pc").fadeIn();
  } else {
    $(".page_top-pc").fadeOut();
  }
});

// #から始まるURLがクリックされた時
$('a[href^="#"]').click(function () {
  // 移動速度を指定（ミリ秒）
  let speed = 1000;
  // hrefで指定されたidを取得
  let id = $(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = $("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = $(target).offset().top;
  // ターゲットの位置までspeedの速度で移動

  $("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  //drawerでの移動をしたときに、自動的にdrawerが閉じるようにする
  if ($(".header_drawer").hasClass("is-active")) {
    $(".drawer-icon").removeClass("is-active");
    $(".header_drawer").removeClass("is-active");
    //背後で動かないようにoverflowをhiddenに設定していたので戻す※この設定がないと移動後動けない
    $("html,body").css("overflow", "auto");
  }
  return false;
});

//formのエラー時の背景と枠の色

// IDが'js-form'のフォーム内の、クラスが'js-form-input'のすべての入力要素を選択
const inputElements = jQuery("#js-form .js-form-input");

// 各入力要素に対して'invalid'イベントのリスナーを設定
inputElements.on("invalid", function () {
  // この要素が無効（検証に合格しない）場合、'is-error'クラスを追加してスタイルを適用
  $(this).addClass("is-error");
  $(".form-submit").css("background", "#CCC");
});

// 各入力要素に対して'input'イベントのリスナーを設定
inputElements.on("input", function () {
  // この要素の値が有効（検証に合格する）場合、'is-error'クラスを削除
  if (this.checkValidity()) {
    $(this).removeClass("is-error");
    $(".form-submit").css("background", "#FFF");
  }
});

//submitを押した時にバリデーションチェック時の挙動
$(".form-submit").on("click", function (e) {
  e.preventDefault();

  let isValid = true;
  inputElements.each(function () {
    // 入力要素の検証に合格しない場合、isValid を false に設定
    if (!this.checkValidity()) {
      isValid = false;
      // エラースタイルを適用
      $(this).addClass("is-error");
    }
  });

  // フォーム内のすべての入力要素が検証に合格する場合
  if (isValid) {
    alert("送信に成功しました");
  }
});
