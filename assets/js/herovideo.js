function HeroVideo(elm) {
  var heroVideo = $(elm || '.hero-video').get(0);
  var minWidth = 1100;

  var pause = function () {
    heroVideo.pause();
  };

  var play = function () {
    if(heroVideo.paused) {
      if ( heroVideo.readyState < 4 ) {
        heroVideo.load();
      }
      heroVideo.play();
    }
  };

  var enable = function () {
    $(heroVideo.parentNode).addClass('enabled');
  };

  function isWide () {
    return $(window).width() >= minWidth;
  }

  function supportsVideoFormat (video, fmt) {
    return video && (video.canPlayType( 'video/' + fmt ) !== '');
  }

  function isHTML5VideoSupported () {
    if (supportsVideoFormat(heroVideo, 'mp4') ||
         supportsVideoFormat(heroVideo, 'webm')) {

      $.each(['playing'], function(_, eventName) {
        heroVideo.addEventListener(eventName, enable);
      });

      return true;
    }
  }

  function updateVideoState () {
    if ( isWide() ){
      play();
    } else {
      pause();
    }
  }

  function trackWidth () {
    $(window).resize(function() {
      updateVideoState();
    });
  }

  if( isHTML5VideoSupported() ) {
    updateVideoState();
    trackWidth();
  }

  return {
    play: play,
    pause: pause,
    enable: enable,
  };
}
