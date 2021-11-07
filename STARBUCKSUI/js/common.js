//main.js 에서 잘라오기(상단)
// console.log("Hello");
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  //logic
  searchInputEl.focus();
});
// focuse되었을때
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// focus 해제되었을때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

//main.js 에서 잘라오기(하단)
// 당해년도 가져오기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
