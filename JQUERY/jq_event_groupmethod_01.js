// $('#m1 button').click(function () {
//   alert('이벤트 연결 1');
// });

$('#m1 button').on('click', function () {
  alert('이벤트 연결1');
});
$('#m2 button').on('click', 'button', function () {
  alert('이벤트 연결2');
});

$('#m3 button').on({
  mouseenter: function () {
    $(this).toggleClass('on');
  },
  mouseleave: function () {
    $(this).toggleClass('on');
  },
});

function showEnvent() {
  alert('이벤트연결3');
}

$('#m4 button').on('click', showEnvent);
$('#m5 button')
  .on('click', function () {
    alert('이벤트 제거');
  })
  .off();
$('m6 button').one('click', function () {
  alert('이벤트 한번만 연결');
});
$('m7').on('click', function () {
  $('p', this).css('background', '#ff0000');
});
