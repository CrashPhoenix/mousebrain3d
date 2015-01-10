(function(){
  var cortex = $('#cortex').hide();
  var hippocampus = $('#hippocampus').hide();
})();

window.onload = function() {
  /*var mainVideo = document.querySelector('#main-video');
  mainVideo.play();
  mainVideo.addEventListener('canplaythrough',function() {
    mainVideo.currentTime = 2.3;
    mainVideo.pause();
  });*/
  var placeholder = $('#placeholder');
  var cortex = $('#cortex');
  var hippocampus = $('#hippocampus');

  //var element = document.querySelector('#sprite');

  $('#cortex-btn').click(function() {
    placeholder.hide()
    hippocampus.hide()
    cortex.show();
    var sprite = new Motio(cortex[0], {
      fps: 20,
      frames: 30
    });
    /*sprite.toStart(true);*/
    sprite.play();
    sprite.toEnd(false);
  });

  $('#hippocampus-btn').click(function() {
    placeholder.hide()
    cortex.hide()
    hippocampus.show();
    var sprite = new Motio(hippocampus[0], {
      fps: 20,
      frames: 30
    });
    /*sprite.toStart(true);*/
    sprite.play();
    sprite.toEnd(false);
  });
}