$('nav a').on('click', function (e) {
  e.preventDefault();
  idx = $(this).index();
  secPos = $('section').eq(idx).offset().top;
  // console.log('idx', idx, 'secPos', secPos);
  $('html').animate({ scrollTop: secPos }, 100, 'easeOutBounce');

  $('p').css({
    left: $(this).offset().left,
  });
});

$('header').draggable({
  axis: 'y',
  revert: function () {
    let boolean = true;
    if ($(this).offset().top > 200) {
      boolean = false;
      console.log(boolean);
    }
    return true;
  },
  // start: function () {
  //   console.log('start');
  // },
  // drag: function () {
  //   console.log('drag');
  // },
  // stop: function () {
  //   console.log('stop');
  // },
});
