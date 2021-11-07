window.onload = function() {
    var login = document.login;
    login.onsubmit = function() {
        if(!login.id.value){
            alert('아이디를 입력해주세요!');
            login.id.focus();
            return false;
        }
        if(!login.pw.value){
            alert('비밀번호를 입력해주세요!');
            login.pw.focus();
            return false;
        }
    }             
}