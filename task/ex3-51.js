function createEle() {
    var bt = document.getElementById('bt');
    function popup() {
        var div = document.createElement('div');
        var a = document.createElement('a');
        var txt = document.createTextNode('아이콕스');
        a.appendChild(txt);
        a.setAttribute('href', 'http://icoxpublish.com');
        a.setAttribute('target', '_blank');
        a.setAttribute('title', '새창');                    
        div.appendChild(a);
        document.body.appendChild(div);
    }
    bt.onclick = popup;
}
addEventListener('load', createEle);