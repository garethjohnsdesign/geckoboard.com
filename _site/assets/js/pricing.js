(function ($) {
  var tooltipTemplate = _.template($('#tooltip-template').text());

  $('.info-glyph')
    .each(attachTooltip)
    .on('mouseover', showTooltip)
    .on('mouseout', hideTooltip);

  function attachTooltip() {
    var text = window.GBTooltips[$(this).data('tooltip-index')],
        $tooltip = createTooltipElement(text);

    $(this).append($tooltip)
      .data('tooltip', $tooltip);
  }

  function hideTooltip() {
    $(this).data('tooltip').hide();
  }

  function showTooltip() {
    $(this).data('tooltip').show();
  }

  function createTooltipElement(text) {
    return $(tooltipTemplate({text: text})).hide();
  }

}(jQuery));

function modify_qty_st(val) {
    var currentValue = parseInt($(".db-qty-starter").text(),10);
    var currentValue = parseInt($(".u-qty-starter").text(),10);
    var newValue = currentValue + val;
    $(".db-qty-starter").text(newValue),10;
    $(".u-qty-starter").text(newValue),10;

    if (newValue <= 1) {
        $(".db-qty-starter").text("1");
        $(".u-qty-starter").text("1");
        $(".d-append").text("Dashboard");
        $(".u-append").text("User");
        document.getElementById("down-st").classList.add('inactive');
        $(".starter-price.monthly").text(25);
        $(".starter-price.annually").text(275);
        $(".starter-price.monthly").addClass('one');
        $(".starter-price.monthly").removeClass('two three four');
        $(".starter-price.annually").addClass('one');
        $(".starter-price.annually").removeClass('two three four');
    }

    if (newValue > 1) {
        $(".d-append").text("Dashboards");
        $(".u-append").text("Users");
        document.getElementById("down-st").classList.remove('inactive');
    }

    if (newValue >= 4) {
        $(".db-qty-starter").text("4");
        $(".u-qty-starter").text("4");
        document.getElementById("up-st").classList.add('inactive');
        $(".starter-price.monthly").text(100);
        $(".starter-price.annually").text(1100);
        $(".starter-price.monthly").addClass('four');
        $(".starter-price.monthly").removeClass('one two three');
        $(".starter-price.annually").addClass('four');
        $(".starter-price.annually").removeClass('one two three');
    }

    if (newValue < 4) {
        document.getElementById("up-st").classList.remove('inactive');
    }

    if (newValue == 2) {
      $(".starter-price.monthly").text(50);
      $(".starter-price.annually").text(550);
      $(".starter-price.monthly").addClass('two');
      $(".starter-price.monthly").removeClass('one three four');
      $(".starter-price.annually").addClass('two');
      $(".starter-price.annually").removeClass('one three four');
    }

    if (newValue == 3) {
      $(".starter-price.monthly").text(75);
      $(".starter-price.annually").text(825);
      $(".starter-price.monthly").addClass('three');
      $(".starter-price.monthly").removeClass('one two four');
      $(".starter-price.annually").addClass('three');
      $(".starter-price.annually").removeClass('two two four');
    }
}

function modify_qty_gr(val) {
    var currentValue = parseInt($(".db-qty-growth").text(),10);
    var newValue = currentValue + val;
    $(".db-qty-growth").text(newValue),10;

    if (newValue <= 5) {
        $(".db-qty-growth").text("5");
        document.getElementById("down-gr").classList.add('inactive');
        $(".growth-price.monthly").text(149);
        $(".growth-price.annually").text(1639);
        $(".growth-price.monthly").addClass('one');
        $(".growth-price.monthly").removeClass('two three four five six');
        $(".growth-price.annually").addClass('one');
        $(".growth-price.annually").removeClass('two three four five six');
    }

    if (newValue > 5) {
        document.getElementById("down-gr").classList.remove('inactive');
    }

    if (newValue >= 10) {
        $(".db-qty-growth").text("10");
        document.getElementById("up-gr").classList.add('inactive');
        $(".growth-price.monthly").text(274);
        $(".growth-price.annually").text(3014);
        $(".growth-price.monthly").addClass('six');
        $(".growth-price.monthly").removeClass('one two three four five');
        $(".growth-price.annually").addClass('six');
        $(".growth-price.annually").removeClass('one two three four five');
    }

    if (newValue == 6) {
      $(".growth-price.monthly").text(174);
      $(".growth-price.annually").text(1914);
      $(".growth-price.monthly").addClass('two');
      $(".growth-price.monthly").removeClass('one three four five six');
      $(".growth-price.annually").addClass('two');
      $(".growth-price.annually").removeClass('one three four five six');
    }

    if (newValue == 7) {
      $(".growth-price.monthly").text(199);
      $(".growth-price.annually").text(2189);
      $(".growth-price.monthly").addClass('three');
      $(".growth-price.monthly").removeClass('one two four five six');
      $(".growth-price.annually").addClass('three');
      $(".growth-price.annually").removeClass('one two four five six');
    }

    if (newValue == 8) {
      $(".growth-price.monthly").text(224);
      $(".growth-price.annually").text(2464);
      $(".growth-price.monthly").addClass('four');
      $(".growth-price.monthly").removeClass('one two three five six');
      $(".growth-price.annually").addClass('four');
      $(".growth-price.annually").removeClass('one two three five six');
    }

    if (newValue == 9) {
      $(".growth-price.monthly").text(249);
      $(".growth-price.annually").text(2739);
      $(".growth-price.monthly").addClass('five');
      $(".growth-price.monthly").removeClass('one two three four six');
      $(".growth-price.annually").addClass('five');
      $(".growth-price.annually").removeClass('one two three four six');
    }

    if (newValue < 10) {
        document.getElementById("up-gr").classList.remove('inactive');
    }
}