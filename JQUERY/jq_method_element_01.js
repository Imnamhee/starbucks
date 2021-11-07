$(document).ready(function () {
  $('#m_menu  a.m').click(function () {
    $(this)
      .next()
      .addBack()
      .toggleClass('on')
      .end()
      .find('.m, ul')
      .removeClass('on')
      .end()
      .parent()
      .siblings()
      .find('.m, ul')
      .removeClass('on');
    return false;
  });
});

//   $(this).toggleClass('on');
//   $(this).next().toggleClass('on');
//   $(this).next().find('.m, ul').removeClass('on');
//   $(this).next().parent().sibling().find('.m, ul').removeClass('on');
//   return false;
// });
