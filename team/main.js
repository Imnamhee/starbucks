const searchEl = document.querySelector('.search-box')
const searchInputEl = document.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})