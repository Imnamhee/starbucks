let User = {
    name:'admin',
    email:'test@im.com',
    phone:'02-1234-5678'
}
console.log(typeof User, User)

let userStr = JSON.stringify(User)
console.log(typeof userStr, userStr)

let userJson = JSON.parse(userStr)
console.log(typeof userJson, userJson)

JSON.parse(userStr,function(key, value){
    console.log('key:', key, 'value:', value)
})