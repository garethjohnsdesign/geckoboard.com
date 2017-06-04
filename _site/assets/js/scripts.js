(function (window, document, $, undefined) {

  'use strict';

  /* Common functions */

  var device = function () {
    if (window.addEventListener)
      return 'ontouchstart' in window ? 'touchstart' : 'click';
    else
      return 'click';
  };

  /* Common variables */

  var mainNav       = document.getElementById('js-main-nav'),
      deviceMenuBtn = document.getElementById('js-menu-btn');

  /* Setup on load */

  mainNav.setAttribute('data-state', 'closed'); // Close the navigation on load (will remain open for non-js)

  /* Toggle menu */

  var toggleNavigation = function (e) {
    e.preventDefault();
    var state = mainNav.getAttribute('data-state') === 'open' ? 'closed' : 'open';
    mainNav.setAttribute('data-state', state);
    this.setAttribute('data-state', state);
  };

  $(deviceMenuBtn).on(device(), toggleNavigation);

  // Scroll to SVG animation
  var timer,
      domItems = $('.animatable').get(),
      items = _.map(domItems, function (el) {
        return {
          el: el,
          top: $(el).offset().top
        };
      });

  function handleScroll (e) {
    if (!timer) {
      timer = setTimeout(function () {
        var top = $(document).scrollTop() +($('body').innerHeight() / 2);

        _.chain(items)
          .filter(function (item) {
            return top > item.top;
          })
          .forEach(function (item) {
            item.el.classList.add('animate');
          });
        timer = null;
      }, 300);
    }
  }

  $(window)
    .on('scroll', handleScroll)
    .on('load', handleScroll);
})(window, document, jQuery);
