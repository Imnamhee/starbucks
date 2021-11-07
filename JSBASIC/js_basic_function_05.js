// 5. 함수
// 5.1 선언적 함수(기명함수)

function sum(x, y) {
    console.log(x + y)
    return x+y
}
const ia = sum(18,19)
const ib = sum(89,59)

console.log(ia)
console.log(ib)
console.log(ia+ib)
console.log(sum(18,19)+sum(89,59))

// 5.2 익명함수 - 함수표현
const sum2 = function(x,y){
    return x+y
}
console.log(sum2(2,9))

// 5.3 즉시실행함수 : 익명함수정의{}()
const instant = function(){
    console.log('즉시함수실행!!')
}()

// instant()

// 5.4 화살표함수 : () => {} vs 익명의 함수: function(){}
const double = function(x){
    return x*2
}
console.log('doublc', double(9))
const doubleArrow = (x) => {
    return 2*x
}
console.log('doubleArrow', doubleArrow(99))

// 화살표 함수의 축약형
// 실행인자가 하나만 있는 경우 =>() 생략가능
// 리턴문이 없는 경우 => {} 생략가능

const doubleArrowShort = (x) => 2*x
console.log('doubleArrowShort', doubleArrowShort(88))

const doubleArrowShort2 = (x,y) => x*y
console.log('doubleArrowShort2', doubleArrowShort2(8,11))

const doubleArrowShort3 = x => null
console.log('doubleArrowShort3', doubleArrowShort3(7))

const doubleArrowShort4 = x => undefined
console.log('doubleArrowShort4', doubleArrowShort4(7))

const doubleArrowShort5 = x => [1, 2, 3]
console.log('doubleArrowShort5', doubleArrowShort5(7))

const doubleArrowShort6 = x => ({name:'test'})
console.log('doubleArrowShort6', doubleArrowShort6(7))

// // 5.5 콜백함수(Callback)
// // 함수의 인자로 사용되는 함수
// // setTImeout(함수, 시간)
// function timeout(){
//     setTimeout( ()=>{
//         console.log("Hello!!")
//     }, 3000) //1000 == 15
// }

// timeout()
// console.log('Done!!')

function timeout(cb){
    setTimeout(()=>{
        console.log("Happy!!")
        cb()
    }, 3000)
}

timeout(()=>{
    console.log("Done!!!")
})

// 5.6 호이스팅
// 함수의 선언부가 유효범위 최상단으로 끌어 올려지는 현상
const ta = 7
hdouble()
// 함수 표현시는 접근오류(호이스팅이 되지않음)
// const hdouble = function(){
//     console.log(a*2)
// }
// 함수선언: 오류없이 접근(호이스팅현상)
function hdouble(){
    console.log(ta*2)
}