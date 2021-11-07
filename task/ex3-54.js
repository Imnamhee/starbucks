window.onload = function() {
    var frm1 = document.frm1;
    var frm2 = document.frm2;
    console.log(frm1.search.placeholder);
    console.log(frm2.subject.placeholder);
    console.log(frm2.credit.placeholder);
    console.log(document.forms[0].elements[0].placeholder);
    console.log(document.forms[1][1].placeholder);
    console.log(document.forms['frm1'].elements['search'].placeholder);
    console.log(document.forms['frm2']['subject'].placeholder);
}