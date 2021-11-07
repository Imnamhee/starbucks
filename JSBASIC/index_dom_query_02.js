let output = ""

for (let i = 0; i < 256; i++) {
    output += '<div></div>'
}

document.body.innerHTML = output

let divEls = document.querySelectorAll('div')
for (let i = 0; i < divEls.length; i++) {
    let div = divEls[i]
    div.style.height = '2px'
    div.style.backgroundColor = `rgb(${i},${i},${i})`
}

// divEls.forEach((div, i)=>{
//     // let div = divEls[i]
//     div.style.height = '2px'
//     div.style.backgroundColor = `rgb(${i},${i},${i})`
// })