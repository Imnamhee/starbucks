const id =document.querySelector("#id")
const btn =document.querySelector("#confirm")

console.log(id)

const pattern = new RegExp("[a-zA-Z][0-9a-zA-Z]{4,7}$")
// const pattren = / /
console.log('id', id.value)
btn.addEventListener('click', function(){
    if(pattern.test(id.value)){
        alert('성공')
    }
    else{
        alert('다시입력')
        id.value=''
        id.focus()
    }
})