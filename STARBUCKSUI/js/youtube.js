//참고 : https://developers.google.com/youtube/iframe_api_reference?hl=ko
//       https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  //YT.Player(id이름, 객체)
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //최초 재생할 유투브 영상 ID //제어목적 ==> videoId이용 , 출력목적 ==> https://www.youtube.com/watch?v=An6LvWQuj_8 오른쪽 마우스 -> 소스코드 복사
    playerVars: {
      autoplay: true, //자동재생여부
      loop: true, //반복재생여부
      playlist: 'An6LvWQuj_8', //반복재상할 유투브 영상 ID목록
    },
    events: {
      onReady: function (event) {
        event.target.mute(); //음소거!!
      },
    },
  });
}
