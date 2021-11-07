$('#title a').click(function (event) {
  if ($(this).hasClass('on')) {
    $(this).add('#list').removeClass('on');
  } else {
    $(this).add('#list').addClass('on');
  }
  event.preventDefault();
  event.stopPropagation();
});

$('html').click(function () {
  $('#title a').add('#list').removeClass('on');
});
