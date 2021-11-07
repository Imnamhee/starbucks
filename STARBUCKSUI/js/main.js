//10.3 화명 스크롤이 일정길이 이상 길어지면 Badge가 Scroll되도록 : GSAP 에니메이션 효과 사용
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top'); // fo 1. 9 home Scroll
// window : 화면자체, 브라우저 창
/*
 window.addEventListener('scroll', function() {
  
  window.addEventListener('scroll', function() {  
    //외부에서 가져오는 함수의 양이 너무 많음
    console.log('Scroll');
  });
*/
//외부에서 가져오는 함수의 양을 제어 -- lodash 사용
//throttle : 스크롤 작업시 함수가 많이 실행될 때 3초간격으로
// -throttle(함수, 시간)
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // badgeEl.style.display = 'none';

      //GSAP 에니메이션 효과 주기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        //객체데이타
        opacity: 0,
        display: 'none',
      });
      //버튼보이기  // fo 1. 9 home Scroll
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보여주기
      // badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        //객체데이타
        opacity: 1,
        display: 'block',
      });
      //버튼숨기기  // fo 1. 9 home Scroll
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
); //300 : 300밀리세컨드 3초

// fo 1. 9 home Scroll
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

//v1.5 커피이미지가 시간차를 두고 나타나도록 에니메이션 처리
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(초), 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //지연시간(초) //0.7 1.4 2.1 2.7
    opacity: 1,
  });
});
/**
 * 슬라이드 요소 관리
 */
//n 1.12 공지사항 슬라이더 작업 --> Swipper slide 작업
//new Swiper(요소, 옵션);
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
//p 1.4 promotion 슬라이더 작업 --> Swipper slide 작업
//new Swiper(요소, 옵션);
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: {
    // 자동 재생 여부
    delay: 5000, // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {
    // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next', // 다음 버튼 선택자
  },
});
//AWARDS SECTION 가로 슬라이더 추가
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드 : 기본값
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

// p 1.18 Toggle Promotion
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide');
  } else {
    //보임처리!
    promotionEl.classList.remove('hide');
  }
});

// y 1.8 Youtube API 제어 : youtube.js에서 처리
// y 1.14 floating image
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한반복
    yoyo: true, //yoyo효과
    ease: Power1.easeInOut, // 1.15 gsap easing
    delay: random(0, delay),
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// 1.15 gsap easing
// https://greensock.com/docs/v2/Easing
// click and modify the underlined values

// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    //감시할 장면(Scene)을 추가
    triggerElement: spyEl, //감시할 요소 지정
    triggerHook: 0.8, //화면의 80% 지점에서 보여짐 여부 감시
  })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
