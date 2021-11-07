function signUp() {
    alert("가입하시겠습니까?")
    document.getElementById("regform").style.display = "none"
    document.getElementById("rname").innerHTML = document.form1.name.value
    document.getElementById("remail").innerHTML = document.form1.email.value
    document.getElementById("result").setAttribute("style","display:block; background-color:khaki;")
}

// regbtn에 click되면 sign이 실행되도록 이벤트 주기
// 표준 이벤트 모델 방식
let btnEl = document.querySelector('#regbtn')
btnEl.addEventListener('click', signUp)