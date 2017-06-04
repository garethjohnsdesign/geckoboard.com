  $('#has_sub-nav-product').mouseenter(function () {
      $('.sub-nav.nav-product').show();
      $('.sub-nav.nav-product').addClass('fadeIn');
      $('.sub-nav.nav-resources').hide();
  });

  $('#has_sub-nav-product').click(function (e) {
      e.stopPropagation();
  });

  $('html').click(function () {
      $('.sub-nav.nav-product').hide();
      $('.sub-nav.nav-product').removeClass('fadeIn');
  });

  $('#has_sub-nav-resources').mouseenter(function () {
      $('.sub-nav.nav-resources').show();
      $('.sub-nav.nav-resources').addClass('fadeIn');
      $('.sub-nav.nav-product').hide();
  });

  $('#has_sub-nav-resources').click(function (e) {
      e.stopPropagation();
  });

  $('html').click(function () {
      $('.sub-nav.nav-resources').hide();
      $('.sub-nav.nav-resources').removeClass('fadeIn');
  });