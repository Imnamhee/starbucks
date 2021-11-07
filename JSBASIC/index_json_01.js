let emp = {
    "name": "임남희",
    "age": 24,
    "tel": "010-8750-9881",
    "address": "서울 중랑구"
}

let msg = ""
msg = "이름: ${emp.name} <br> 나이: ${emp.age} <br> 전화: ${emp.tel} <br> 주소: ${emp.address}<br>"
console.log(msg)

let divEl = document.querySelector('#result')
console.log(divEl)
divEl.innerHTML=msg