// 3. Operator(연산자)
// 산술연산자
console.log( 1+7)
console.log( 5-9)
console.log( 6*12)
console.log( 10/3)
console.log( 10%3)

// + : 문자연결
let subject = 'JavaScript'
let score = 100
console.log(subject + '과목 성적은 ' + score + '입니다.' )
// 보간법
console.log(`${subject} 과목 성적은 ${score} 입니다.`)

let score2 = 100
// let result = ++score2
let result = score2++
console.log(result, score2)

//할당연산자
let ln = 2
ln = ln + 1
ln += 1
ln -= 1
ln *= 1
ln /= 1
console.log(ln)

//비교연산자
const a = 2
const b = 1
console.log(a===b)
console.log(a=='2')
console.log(a==='2')

console.log(a!==b)
console.log(a!=b)

console.log(a>b)
console.log(a>=b)
console.log(a<b)
console.log(a<=b)

function isEqual(x, y) {
    return x===y
}
console.log(isEqual(1,1))
console.log(isEqual(2,'2'))

//논리연산자
const a2 = 1===1
const b2 = 'AB' === 'ABC'
const c2 = true
console.log(a2)
console.log(b2)
console.log(c2)

console.log('&&', a2&&b2&&c2)
console.log('||', a2||b2||c2)
console.log('!', !c2)

//비트연산자
console.log(1&3)
console.log(1|3)
console.log(1<<2)
console.log(1>>3)
console.log(1^3)
console.log(~2)

//삼항연산자 =? (조건식) t실행문 : f실행문
const con = 1 < 2
if(con) {
    console.log('참')
}
else{ 
    console.log('거짓')
}
console.log(con?'참':'거짓')