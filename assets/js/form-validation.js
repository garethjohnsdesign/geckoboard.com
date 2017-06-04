var GB = GB || {};

GB.FormValidation = {
  updateValidity: function(elem) {
    if (elem.validity.valid) {
      this.clearErrorMessage(elem);
    } else {
      this.showErrorMessage(elem);
    }
  },

  showErrorMessage: function(elem) {
    var $elem = $(elem);

    if ($elem.hasClass('error') || $elem.hasClass('pending')) {
      return;
    }

    $elem.addClass('error')
         .parent()
         .append($("<span class='error-message'>" + this.validationErrorMessage(elem) + "</span>"));
  },

  validationErrorMessage: function(field) {
    if (field.validity.valueMissing) {
      return $(field).data('value-missing') || '';
    } else if (field.validity.patternMismatch) {
      return $(field).data('pattern-mismatch') || '';
    } else if (field.validationMessage && field.validationMessage !== '') {
      return field.validationMessage || '';
    }
    return '';
  },

  clearErrorMessage: function(elem) {
    $(elem).removeClass('error').siblings('.error-message').remove();
  }
};
