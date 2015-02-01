(function(){
  $('#cortex').hide();
  $('#cortex-description').hide();
  $('#hippocampus').hide();
  $('#hippocampus-description').hide();
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

    // Turn off other sections
    placeholder.hide()
    hippocampus.hide()
    $('#hippocampus-btn').removeClass('active');
    $('#hippocampus-description').hide();

    // Turn on this section
    $(this).addClass('active');
    cortex.show();
    $('#cortex-description').fadeIn();

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

    // Turn off other sections
    placeholder.hide()
    cortex.hide()
    $('#cortex-btn').removeClass('active');
    $('#cortex-description').hide();

    // Turn on this section
    $(this).addClass('active');
    hippocampus.show();
    $('#hippocampus-description').fadeIn();

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