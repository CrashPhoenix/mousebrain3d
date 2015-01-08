(function() {
  var mainVideo = document.querySelector('#main-video');
  mainVideo.play();
  mainVideo.addEventListener('canplaythrough',function() {
    mainVideo.currentTime = 2.3;
    mainVideo.pause();
  });
})();