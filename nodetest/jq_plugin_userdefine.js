$.fn.extend({
  faq: function () {
    let ts = $(this);
    $.each(ts, function (i, o) {
      $('button', o).on('click', faqHandler);
      function faqHandler() {
        if ($(this).parent().next().is(':hidden')) {
          $('li>div:visible', o).hide();
          $(this).parent().next().show();
        } else {
          $('li<div:visible', o), hide();
        }
      }
    });
  },
});

$('.faq').faq();
