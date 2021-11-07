let emp = [
    {"name": "임남희", "age": 24},
    {"name": "최연준", "age": 23},
    {"name": "최수빈", "age": 22}
]

let msg = ""
// msg += "이름: " + emp[0].name + "<br> 나이: " + emp[0].age + "<br><br>"
// msg += "이름: " + emp[1].name + "<br> 나이: " + emp[1].age + "<br><br>"
// msg += "이름: " + emp[2].name + "<br> 나이: " + emp[2].age + "<br><br>"
// with(emp[0]){
//     msg +="이름: " + name + "<br> 나이: "+age+"<br><br>"
// }
// with(emp[1]){
//     msg +="이름: " + name + "<br> 나이: "+age+"<br><br>"
// }
// with(emp[2]){
//     msg +="이름: " + name + "<br> 나이: "+age+"<br><br>"
// }

// for(of)
// for (let empi of emp) {
//     with(empi){
//         msg +="이름: " + name + "<br> 나이: "+age+"<br><br>"
//     }
// }

// forEach
emp.forEach((empi)=>{
    with(empi){
        msg +="이름: " + name + "<br> 나이: "+age+"<br><br>"
    }
})

document.querySelector("#result").innerHTML = msg
