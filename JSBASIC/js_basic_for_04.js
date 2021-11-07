// 4. 제어문
// for문

// for(let i=0; i<10; i++) {
//     console.log(i)
// }

const ulEl = document.querySelector('ul')
console.log(ulEl)

for(let i=1; i<=10; i++){
    const li = document.createElement('li')
    li.textContent=`list-${i}`

    if(i%2 === 0) {
        li.addEventListener('click', function(){
            console.log(li.textContent)
        })
    }

    ulEl.appendChild(li)
}