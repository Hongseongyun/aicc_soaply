// jquery(document).ready(function () {
//   // jquery codes here...
// });

$(function () {
  // $('.menu-icon').click(function () {
  //   alert('clicked!');
  // });

  // $('.footer-nav li').click(function (e) {
  //   // 원래의 기능을 막아주는 함수
  //   e.preventDefault();
  //   alert($(this).attr('class'));
  // });

  $('.menu-icon').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.menu-icon i').attr('class', 'ri-close-line');
      $('.mobile-menus').slideDown('fast');
    } else {
      $('.menu-icon i').attr('class', 'ri-menu-line');
      $('.mobile-menus').slideUp('fast');
    }
  });
});
