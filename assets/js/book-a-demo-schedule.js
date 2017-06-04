/* jshint loopfunc:true */

(function (window, document, undefined) {
  'use strict';

  // Inject queryParams passed by Salesforce retURL
  var $cal = $('.calendly-inline-widget')
  var baseURL = $cal.attr('data-url');
  $cal.attr('data-url', baseURL + window.location.search);

  // Async load Calendly script since they don't provide a trigger method
  var calendlyScript = document.createElement('script');
  calendlyScript.src = 'https://calendly.com/assets/external/widget.js';
  document.body.appendChild(calendlyScript);

})(window, document);
