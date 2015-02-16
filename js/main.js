(function(){
  $('#cortex').hide();
  $('#cortex-description').hide();
  $('#hippocampus').hide();
  $('#hippocampus-description').hide();
  $('#striatum').hide();
  $('#striatum-description').hide();
  $('#hypothalamus').hide();
  $('#hypothalamus-description').hide();
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
  var striatum = $('#striatum');
  var hypothalamus = $('#hypothalamus');

  var cortexButton = $('#cortex-btn');
  var hippocampusButton = $('#hippocampus-btn');
  var striatumButton = $('#striatum-btn');
  var hypothalamusButton = $('#hypothalamus-btn');

  var cortexDescription = $('#cortex-description');
  var hippocampusDescription = $('#hippocampus-description');
  var striatumDescription = $('#striatum-description');
  var hypothalamusDescription = $('#hypothalamus-description');

  var sections = [placeholder, cortex, hippocampus, striatum, hypothalamus];
  var buttons = [cortexButton, hippocampusButton, striatumButton, hypothalamusButton];
  var descriptions = [cortexDescription, hippocampusDescription, striatumDescription, hypothalamusDescription];

  //var element = document.querySelector('#sprite');

  var turnOnClick = function(selector) {
    $(selector).data('clicked', 'no');
  }
  var turnOffClick = function(selector) {
    $(selector).data('clicked', 'yes');
  }

  var showInfo = function() {
    $('#brain-info-overlay').removeClass('beforeAnimation');
    $('#brain-info-overlay').addClass('stretchRight');
  }

  var contractInfo = function() {
    $('#brain-info-overlay').addClass('beforeAnimation');
    $('#brain-info-overlay').removeClass('stretchRight');
  }

  $('#details-btn').on('click', showInfo);

  /*
  ==============================================
  Menu Controls
  ==============================================
  */
  /***********************
   *
   *  CORTEX BUTTON
   *
   ***********************/
  $('#cortex-btn').click(function() {
    // Hide placeholder
    $('#placeholder-overlay').fadeOut();

    // Hide info overlay
    contractInfo();

    // Check here if clicked already and return if so
    if($('#cortex-btn').data('clicked') == 'yes') return;
    turnOffClick('#cortex-btn');

    // Turn off other sections
    placeholder.hide();
    hippocampus.hide();
    $('#hippocampus-btn').removeClass('active');
    $('#hippocampus-description').hide();
    striatum.hide();
    $('#striatum-btn').removeClass('active');
    $('#striatum-description').hide();
    hypothalamus.hide();
    $('#hypothalamus-btn').removeClass('active');
    $('#hypothalamus-description').hide();

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


  /***********************
   *
   *  HIPPOCAMPUS BUTTON
   *
   ***********************/
  $('#hippocampus-btn').click(function() {
    // Hide placeholder
    $('#placeholder-overlay').fadeOut();

    // Hide info overlay
    contractInfo();

    // Check here if clicked already and return if so
    if($('#hippocampus-btn').data('clicked') == 'yes') return;
    turnOffClick('#hippocampus-btn');

    // Turn off other sections
    placeholder.hide();
    cortex.hide();
    $('#cortex-btn').removeClass('active');
    $('#cortex-description').hide();
    striatum.hide();
    $('#striatum-btn').removeClass('active');
    $('#striatum-description').hide();
    hypothalamus.hide();
    $('#hypothalamus-btn').removeClass('active');
    $('#hypothalamus-description').hide();

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


  /***********************
   *
   *  STRIATUM BUTTON
   *
   ***********************/
  $('#striatum-btn').click(function() {
    // Hide placeholder
    $('#placeholder-overlay').fadeOut();

    // Hide info overlay
    contractInfo();

    // Check here if clicked already and return if so
    if($('#striatum-btn').data('clicked') == 'yes') return;
    turnOffClick('#striatum-btn');

    // Turn off other sections
    placeholder.hide();
    cortex.hide();
    $('#cortex-btn').removeClass('active');
    $('#cortex-description').hide();
    hippocampus.hide();
    $('#hippocampus-btn').removeClass('active');
    $('#hippocampus-description').hide();
    hypothalamus.hide();
    $('#hypothalamus-btn').removeClass('active');
    $('#hypothalamus-description').hide();

    // Turn on this section
    $(this).addClass('active');
    striatum.show();
    $('#striatum-description').fadeIn();

    var sprite = new Motio(striatum[0], {
      fps: 20,
      frames: 31
    });
    /*sprite.toStart(true);*/
    sprite.play();
    sprite.toEnd(false, function() {
      turnOnClick('#striatum-btn');
    });
  });


  /***********************
   *
   *  HYPOTHALAMUS BUTTON
   *
   ***********************/
  $('#hypothalamus-btn').click(function() {
    // Hide placeholder
    $('#placeholder-overlay').fadeOut();

    // Hide info overlay
    contractInfo();

    // Check here if clicked already and return if so
    if($('#hypothalamus-btn').data('clicked') == 'yes') return;
    turnOffClick('#hypothalamus-btn');

    // Turn off other sections
    placeholder.hide();
    cortex.hide();
    $('#cortex-btn').removeClass('active');
    $('#cortex-description').hide();
    hippocampus.hide();
    $('#hippocampus-btn').removeClass('active');
    $('#hippocampus-description').hide();
    striatum.hide();
    $('#striatum-btn').removeClass('active');
    $('#striatum-description').hide();

    // Turn on this section
    $(this).addClass('active');
    hypothalamus.show();
    $('#hypothalamus-description').fadeIn();

    var sprite = new Motio(hypothalamus[0], {
      fps: 20,
      frames: 31
    });
    /*sprite.toStart(true);*/
    sprite.play();
    sprite.toEnd(false, function() {
      turnOnClick('#hypothalamus-btn');
    });
  });



  /*
  ==============================================
  Video Controls
  ==============================================
  */
  /***********************
   *
   *  CORTEX VIDEOS
   *
   ***********************/
   $('#cortex-vid').click(function() {
     $('#cortex-vid')[0].play();
     $('#cortex-vid-btn').addClass('active');
   });
   $('#cortex-vid-btn').click(function() {
     $('#cortex-vid')[0].play();
     $('#cortex-vid-btn').addClass('active');
   });

  /***********************
   *
   *  HIPPOCAMPUS VIDEOS
   *
   ***********************/
   $('#hippocampus-vid').click(function() {
    $('#hippocampus-vid')[0].play();
   });
   $('#hippocampus-vid-btn').click(function() {
    $('#hippocampus-vid')[0].play();
   });

  $('#hippocampus-drug-vid').click(function() {
    $('#hippocampus-drug-vid')[0].play();
   });
   $('#hippocampus-drug-vid-btn').click(function() {
    $('#hippocampus-drug-vid')[0].play();
   });

  $('#hippocampus-behavior-vid').click(function() {
    $('#hippocampus-behavior-vid')[0].play();
   });
   $('#hippocampus-behavior-vid-btn').click(function() {
    $('#hippocampus-behavior-vid')[0].play();
   });

   /***********************
   *
   *  STRIATUM VIDEOS
   *
   ***********************/
   $('#striatum-vid').click(function() {
     $('#striatum-vid')[0].play();
     $('#striatum-vid-btn').addClass('active');
   });
   $('#striatum-vid-btn').click(function() {
     $('#striatum-vid')[0].play();
     $('#striatum-vid-btn').addClass('active');
   });

  /***********************
   *
   *  HYPOTHALAMUS VIDEOS
   *
   ***********************/
   $('#hypothalamus-vid').click(function() {
     $('#hypothalamus-vid')[0].play();
     $('#hypothalamus-vid-btn').addClass('active');
   });
   $('#hypothalamus-vid-btn').click(function() {
     $('#hypothalamus-vid')[0].play();
     $('#hypothalamus-vid-btn').addClass('active');
   });
}