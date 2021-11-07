// 8.Object
// 8.1 객체생성: literal을 이용한 객체 생성
const User = {
    name: 'Imnamhee',
    age:24,
    view: function(){
        return `My name is ${this.name}, My age is ${this.age}`
    }
}
console.log(typeof User, User)
console.log(User.name, User.age)
console.log(User.view())

// 8.2 생성자 함수를 이용한 객체 생성
// 빈 객체를 생성하고 프로퍼티 속성, 메서드 추가
const UserA = new Object()
UserA.name ='LIM'
UserA.age = 22
UserA.view = function(){
    return `My name is ${this.name}, My age is ${this.age}`
}
console.log(UserA.view())

// 생성자 함수
function UserB(name, age){
    this.name = name
    this.age = age
    this.view = function(){
        return `My name is ${this.name}, My age is ${this.age}`
    }
}

let obj1 = new UserB('Gang', 20)
let obj2 = new UserB('Choi', 23)
console.log(obj1.view())
console.log(obj2.view())

// 8.3 prototype메서드 이용
function Triangle(b,h){
    this.base=b
    this.heigh=h
}
Triangle.prototype.area = function(){
    return this.base * this.heigh / 2
}
Triangle.prototype.printResult = function(){
    return `밑변: ${this.base}, 높이: ${this.heigh}, 넓이: ${this.area}`
}

let t1 = new Triangle(30, 10)
console.log(t1.printResult())

let t2 = new Triangle(77, 90)
console.log(t2.printResult())