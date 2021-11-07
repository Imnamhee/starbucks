let emp = {
    "id":"abcd",
    "pw":"1234",
    "name": "임남희",
    "point": 1250
}

function login(){
    let div = document.querySelector('.wrap')

    let id=document.querySelector("#id").value
    let pw=document.querySelector("#pw").value
    console.log(id,pw)

    // let spanEl = document.querySelector("#cocnfirm")
    let spanEl = document.querySelector('span')
    if(id==emp.id &&pw==emp.pw){
        with(emp){
            spanEl.innerHTML=`${name}님 환영합니다 <br>현재 포인트는 ${point}입니다`
        }
        spanEl.style.color="green"
    }
    else{
        spanEl.innerText=`아이디와 비밀번호가 틀립니다.`
        spanEl.style.color="red"
    }
    div.appendChild(spanEl)
}

let btnEl = document.querySelector('#log')
btnEl.addEventListener('click', login)