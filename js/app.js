// 참고페이지 : https://dabipyeung.com/soaply/

//Swiper Slider
setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical', // 세로
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}, 300);

//Header Style Change When scrolling down
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const scrolPosition = window.scrollY;
  if (scrolPosition > 10) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});

// Fit Insta Image Height

const instaImageHeight = document.querySelector('#h').scrollHeight; // 아이디 h 요소의 높이

document.querySelector('#fh').style.height = instaImageHeight + 'px';

window.addEventListener('resize', () => {
  const instaImageHeight = document.querySelector('#h').scrollHeight; // 아이디 h 요소의 높이

  document.querySelector('#fh').style.height = instaImageHeight + 'px';
});
