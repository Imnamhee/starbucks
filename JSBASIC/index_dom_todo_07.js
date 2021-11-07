// let button = document.querySelector('.btn')
// button.addEventListener("click", function() {
//     const addItem = document.getElementById('item')
//     const list = document.getElementById('todolist')

//     const temp = document.createElement('li')
//     temp.innerHTML = addItem.value
//     list.appendChild(temp)
//     addItem.value=""
// })

function addItem(){
    let list = document.querySelector('#todolist')
    let item = document.querySelector('#item')

    // 추가할 li 객체 만들기
    let listitem = document.createElement('li')
    let itembtn = document.createElement('button')

    itembtn.addEventListener('click',(e)=>{
        let pnode = e.target.parentNode
        list.removeChild(pnode)
    })

    listitem.innerHTML = item.value
    listitem.appendChild(itembtn)
    list.appendChild(listitem)


    item.value=''
    item.focus()

}
let btnEl = document.querySelector('.btn')
btnEl.addEventListener('click', addItem)