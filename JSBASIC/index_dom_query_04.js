// 속성지정
document.body.setAttribute('data-custom','value')
const dataCustom = document.body.getAttribute('data-custom')
console.log(dataCustom)

// 속성읽기
const divEls = document.querySelectorAll('div')

divEls.forEach((divEl, i)=>{
    const dataRole = divEl.getAttribute('data-role')
    console.log(dataRole)
})