var detachDiv;

$('button:eq(0)').click(function () {
  $('#m1 a').removeAttr('href');
  $('#m2').empty();
  $('#m3').remove();
  detachDiv = $('#m4').detach();
  console.log('detachDiv:', detachDiv);
});

$('button:eq(1)').click(function () {
  detachDiv.insertAfter('#m2');
});
