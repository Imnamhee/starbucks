$.ajax({
  type: 'GET',
  url: 'data2.json',
  dataType: 'json',
  success: function (data) {
    let elem = '';
    $.each(data, function (index, obj) {
      elem += '<div>';
      elem += '<h2>' + obj.item + '</h2>';
      elem +=
        "<div><img src='" + obj.imgfile + "' alt='" + obj.item + "'></div>";
      elem += "<div><a href='" + obj.link + "'> 상세정보 </a></div>";
      elem += '</div>';
    });
    $('.subject').append(elem);
  },
  error: function (xhr) {
    console.log(xhr.status + '/', xhr.errorText);
  },
});
let roll;
function play() {
  roll = setInterval(function () {
    $('.subject > div:first').insertAfter($('.subject > div:last'));
  }, 2000);
}
function stop() {
  clearInterval(roll);
}
$('#vis').hover(
  function () {
    stop();
  },
  function () {
    play();
  }
);

play();
