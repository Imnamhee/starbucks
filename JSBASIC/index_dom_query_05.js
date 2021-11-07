const tea = document.querySelector('#tea')

const childs = tea.childNodes

console.log(childs)

for(let i=0;i<childs.length;i++){
    if(childs[i].nodeName == "LI"){
        console.log(i, '번째 데이터', childs[i].firstChild.nodeValue)
    }
}