console.log($('#m1').html());
$('#m1').html('<em>HTML<em>');
$('#m2 > div').html(function () {
  return '<strong>' + $(this).text() + '</strong>';
});
