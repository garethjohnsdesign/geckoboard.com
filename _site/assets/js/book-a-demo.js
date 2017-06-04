/* jshint loopfunc:true */

(function (window, document, undefined) {
  'use strict';

  var $form = $('#book-demo form');

  $form.submit(function (e) {
    // Fix for safari
    // Other browsers doesn't trigger the events
    if ( this.checkValidity && !this.checkValidity() ) {
      e.preventDefault();
      return;
    }

    $form.find('input, select').each(function (_idx, elem) {
      GB.FormValidation.updateValidity(elem);
    });

    // Update retURL with params to prefill calendly
    var fullName = $form.find('#first_name').val() +
      ' ' + $form.find('#last_name').val();

    var email = $form.find('#email').val();
    var queryParams = [
      { name: 'name', value: fullName },
      { name: 'email', value: email }
    ];

    var retInput = $form.find('input[name="retURL"]');
    var baseURL = retInput.val();
    retInput.val(baseURL + '?' + $.param(queryParams));
  });

  $form.find('input, select')
    .on('change', function (e) {
      e.preventDefault();
      GB.FormValidation.updateValidity(e.target);
    })
    .on('invalid', function (e) {
      e.preventDefault();
      GB.FormValidation.updateValidity(e.target);
    })
    .on('keypress', function (e) {
      var $this = $(this);

      // Remove the error message as soon as the user makes a change to an invalid field
      if ($this.hasClass('error')) {
        GB.FormValidation.clearErrorMessage($this);
      }
    });
})(window, document);
