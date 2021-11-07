var city = ['서울', '대구', '대전', '부산'];
// each:복붙 가능
$.each(city, function (index, value) {
  console.log(`${index} : ${value}`);
});
$(city).each(function (index, value) {
  console.log(`${index} : ${value}`);
});
const newcity2 = $.each(city, function (index, value) {
  if (index < 2) return value;
});
console.log(newcity2.toString());

// map: 복사가능, function(value, index)
const newCity = $.map(city, function (value, index) {
  if (index < 2) return value;
});
console.log(newCity.toString());

$('div').each(function (index, element) {
  console.log(index);
  console.log(element);
  console.log($(this).attr('class'));
});

var arr1 = [
  { area: '서울', name: '무대리' },
  { area: '부산', name: '홍과장' },
  { area: '대전', name: '박사장' },
  { area: '대구', name: '빅마마' },
];

const arr_cp1 = $.map(arr1, function (value, index) {
  if (value.area == '서울') {
    return value;
  }
});
console.log('mapp arr_cp1 ==> ', arr_cp1);

const arr_cp2 = $.grep(arr1, function (value, index) {
  if (value.area == '서울') {
    return true;
  } else {
    return false;
  }
});
console.log('mapp arr_cp2 ==> ', arr_cp2);
