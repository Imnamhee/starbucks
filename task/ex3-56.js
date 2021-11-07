window.onload = function() {
    var frm = document.frm;
    var date = new Date();
    var year = date.getFullYear();            
    for (var i = 1970; i <= year; i++) {
        frm.y.add(new Option(i, i));
    }
    for (var i = 1; i <= 12; i++) {
        frm.m.add(new Option(i, i));
    }
    frm.sub.length = 3;
}