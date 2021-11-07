const btnStart = document.querySelector('#startbtn')
console.log(btnStart)

btnStart.addEventListener('click', function(){
    const demoEl = document.querySelector('#demo')
    demoEl.innerHTML = "Button Start"
})

const btnStop = document.querySelector('#stopbtn')
btnStop.addEventListener('click', function(){
    const demoEl = document.querySelector('#demo')
    demoEl.innerHTML="Button End"
})