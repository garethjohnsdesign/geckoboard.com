(function () {
  var maxWidth = 1235,
      zenboxInitialised = false;

  if (zenboxTest()) {
    zenboxInit();
  }

  trackWidth();

  function trackWidth() {
    $(window).on('resize', function () {
      // if zenboxInitialised is true then zenbox has already been initialised
      // we just need to hide it if the screen isnt wide enough
      // if zenboxInitialised is false then the screen was previously too narrow
      // to show zenbox - we now test if it's wide enough and initialise accordingly
      if (zenboxInitialised) {
        Zenbox.update({
          hide_tab: !isWide()
        });
      } else {
        if (zenboxTest()) {
          zenboxInit();
        }
      }
    });
  }

  function zenboxTest() {
    return isWide() && typeof(Zenbox) !== "undefined";
  }

  function zenboxInit() {
    Zenbox.init({
      dropboxID: "20298633",
      url: "https://geckoboard.zendesk.com",
      tabTooltip: "Help",
      tabImageURL: "/assets/img/help-tab.png",
      tabColor: "black",
      tabPosition: "Left"
      });
    zenboxInitialised = true;
  }

  function isWide() {
    return $(window).width() >= maxWidth;
  }
})();
