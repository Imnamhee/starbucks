$('.datepicker').datepicker({
  showOn: 'button',
  buttonImage: './images/calendar_icon.png',
  buttonImageOnly: true,
  buttonText: '달력',
  dateFormat: 'yy-mm-dd',
});
$.datepicker.setDefaults({
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  showMonthAfterYear: true,
});
