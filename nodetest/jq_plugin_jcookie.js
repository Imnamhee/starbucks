if ($.cookie('popup') == 'none') {
  $('#notice_wrap').hide();
}

let $expChk = $('#expiresChk');
function closePop() {
  if ($expChk.is(':checked')) {
    $.cookie('popup', 'none', { expires: 3, path: '/' });
  }
  $('#notice_wrap').fadeout('fast');
}
$('.closeBtn').on('click', closePop);
