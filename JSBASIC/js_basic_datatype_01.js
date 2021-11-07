// console.log("Java Script 외부 연결 확인")

// // 1. 변수 var, let, const 차이
// var num = 10
// var num = "Good" //재할당 가능

// console.log(num)

// let value = 10
// // let value = "Good"
// value = "Good" // 재할당이 불가능하나, 변경은 가능
// console.log(value)

//const
// const con = 100
// console.log(con)
// con=200
// console.log(con)

//Data Type : Literal Type (값에 의해서 변수의 데이터 Type이 결정)
// 숫자 : number
let myNumber = 10
let myFNumber = 10.5
let myDNumber = 1e5
console.log(myNumber)
console.log(myFNumber)
console.log(myDNumber)

console.log(typeof myNumber, myNumber)
console.log(typeof myFNumber, myFNumber)
console.log(typeof myDNumber, myDNumber)

//문자형
let myName = "홍길동"
let myEmail = 'Hong@text.com'
// let myHello = "Hello" + myName
// 문자열 보간법
let myHello = `Hello $(myName)`
console.log(typeof myName, myName)
console.log(typeof myEmail, myEmail)
console.log(typeof myHello, myHello)

// boolean : true, false
let b1 = (3 > 2)
let b2 = (3 < 2)
console.log(typeof b1, b1)
console.log(typeof b2, b2)
console.log(Boolean(0))
console.log(Boolean(1))

// undefined ==> 선언만 하고 데이터 값이 지정되지 않은 경우
let temp1 = 10
let temp2
console.log(typeof temp1, temp1)
console.log(typeof temp2, temp2)

//null
let obj1 = 100
obj1 = null
let obj2
console.log(typeof obj1, obj1)
console.log(typeof obj2, obj2)

let obj3 = document.getElementById("wrap")
console.log(typeof obj3, obj3)

//객체 
let User = {
    name: '홍길동',
    age: 23
}
console.log(typeof User, User)
console.log(typeof User.name, User.name)
console.log(typeof User.age, User.age)

//배열
let animal = ['Lion', 'Tiger', 'Dog', 'Cat', 'Mouse']
console.log(typeof animal, animal)
console.log(typeof animal[3], animal[3])