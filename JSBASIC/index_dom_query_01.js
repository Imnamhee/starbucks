// let header = document.getElementById('header')
let header = document.querySelector("#header")
// let header = document.querySelector("h1")
console.log(header)

header.style.color = "red"
header.style.border="1px solid black"

let headers = document.querySelectorAll('h1')
console.log(headers)

// 
// for(let i = 0; i<headers.length; i++){
//     let header = headers[i]

//     header.style.color='orange'
//     header.style.backgroundColor='red'
//     header.innerHTML=`index-${i}`
// }
// for in
// for (let i in headers) {
//     let header = headers[i]

//     header.style.color='orange'
//     header.style.backgroundColor='red'
//     header.innerHTML=`index-${i}`
// }
// for of
for (let header of headers) {
    // let header = headers[i]

    header.style.color='orange'
    header.style.backgroundColor='red'
    // header.innerHTML=`index-${i}`
}