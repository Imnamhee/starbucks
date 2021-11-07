window.onload = function() {
    var gnb = document.getElementById('gnb');
    console.log(gnb.parentNode);
    console.log(gnb.children[0]);
    console.log(gnb.children[0].children[0]);
    console.log(gnb.children[0].children[0].nextElementSibling);
    console.log(gnb.children[0].children[2].previousElementSibling);
    console.log(gnb.children[0].firstChild);
    console.log(gnb.children[0].lastChild);
    console.log(gnb.children[0].tagName);
    console.log(gnb.children[0].children[0].firstChild.nodeValue);
    console.log(gnb.children[0].children[0].nodeType);
    console.log(gnb.id);
    console.log(gnb.children[0].children[0].className);
};