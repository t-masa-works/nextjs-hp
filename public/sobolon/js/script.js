$(".bars").on("click", function (e) {
  e.preventDefault();

  $(this).toggleClass("is-active");
  $(".drawer-content").toggleClass("is-active");
  return false;
});

$('a[href^="#"]').on("click", function () {
  let header = $(".header").innerHeight();
  let speed = 300;
  let id = $(this).attr("href");
  let target = "#" == id ? "html" : id;
  let position = $(target).offset().top - header;

  $("html,body").animate({ scrollTop: position }, speed);
  return false;
});

new WOW().init();

let $form = $("#js-form");
$form.submit(function (e) {
  $.ajax({
    url: $form.attr("action"),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        $form.slideUp()
        $('#js-success').slideDown()
      },
      200: function () {
        $form.slideUp()
        $('#js-error').slideDown()
      },
    },
  });
  return false;
});

let $submit = $('#js-submit')
$('#js-form input, #js-form textarea').on('change', function(){
  if(
    $('#js-form input[type="text"]').val() !== "" &&
    $('#js-form input[type="email"]').val() !== "" &&
    $('#js-form input[name="entry.1715579536"]').prop('checked') === true
  ){
    $submit.prop('disabled', false)
    $submit.addClass('-active')
  } else {
    $submit.prop('disabled', true)
    $submit.removeClass('-active')
  }
})