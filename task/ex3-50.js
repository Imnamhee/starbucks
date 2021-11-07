function createEle() {
    var bt = document.getElementById('bt');
    function popup() {
        var div = document.createElement('div');
        var p = document.createElement('p');
        var txt = document.createTextNode('자바스크립트');
        p.appendChild(txt);
        div.appendChild(p);
        document.body.appendChild(div);
    }
    bt.onclick = popup;
}
addEventListener('load', createEle);