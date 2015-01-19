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

  var turnOnClick = function(selector) {
    $(selector).data('clicked', 'no');
  }
  var turnOffClick = function(selector) {
    $(selector).data('clicked', 'yes');
  }

  $('#cortex-btn').click(function() {
    //Check here if clicked already and return if so
    if($('#cortex-btn').data('clicked') == 'yes')return;
    turnOffClick('#cortex-btn');

    placeholder.hide()
    hippocampus.hide()
    cortex.show();
    var sprite = new Motio(cortex[0], {
      fps: 20,
      frames: 31
    });

    sprite.play();
    sprite.toEnd(false, function() {
      turnOnClick('#cortex-btn');
    });
  });

  $('#hippocampus-btn').click(function() {
    //Check here if clicked already and return if so
    if($('#hippocampus-btn').data('clicked') == 'yes')return;
    turnOffClick('#hippocampus-btn');

    placeholder.hide()
    cortex.hide()
    hippocampus.show();
    var sprite = new Motio(hippocampus[0], {
      fps: 20,
      frames: 31
    });
    /*sprite.toStart(true);*/
    sprite.play();
    sprite.toEnd(false, function() {
      turnOnClick('#hippocampus-btn');
    });
  });
}