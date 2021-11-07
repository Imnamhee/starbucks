window.onload = function () {
    var text = document.header-search-form
    text.onsubmit = function () {
        var kor_check = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
        if (kor_check.test(input-search))
        {
            alert("한글만 입력할 수 있습니다.");
            frm.input-search.value = "";
            frm.input-search.focus();
            return false;
        }
    }
}

${document}.ready(function(){
    $('#main-section').imagesLoaded(function(){
        $('#main-section').masonry({
            itemSelector: '.paper',
            columnWidth: 230,
            isAnimated: true
        });
    });
});