function hideAll () {
  $('#cortex').hide();
  $('#cortex-description').hide();
  $('#hippocampus').hide();
  $('#hippocampus-description').hide();
  $('#striatum').hide();
  $('#striatum-description').hide();
  $('#hypothalamus').hide();
  $('#hypothalamus-description').hide();
  console.log("hiding all!");
}

(function(){
  hideAll();
  $('#rat-section').hide();
})();

window.onload = function() {
  var placeholder = $('#placeholder');
  var cortex = $('#cortex');
  var hippocampus = $('#hippocampus');
  var striatum = $('#striatum');
  var hypothalamus = $('#hypothalamus');

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

  /*
  ==============================================
  Tab Controls
  ==============================================
  */
  $('.section-tab').click(function() {
    $('.placeholder-overlay').each(function() {
      $(this).show();
    });
    $('.section-tab').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    $('.section-content').each(function() {
      $(this).hide();
    });
    $(this.dataset.section).fadeIn();
    //hideAll();
  });

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
    $('.placeholder-overlay').each(function() {
      $(this).fadeOut();
    });

    // Hide info overlay
    contractInfo();

    // Check here if clicked already and return if so
    if($(this).data('clicked') == 'yes') return;
    turnOffClick(this);

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
      turnOnClick(this);
      setTimeout(showInfo, 1000);
    });
  });


  /***********************
   *
   *  HIPPOCAMPUS BUTTON
   *
   ***********************/
  $('#hippocampus-btn').click(function() {
    // Hide placeholder
    $('.placeholder-overlay').each(function() {
      $(this).fadeOut();
    });

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
      setTimeout(showInfo, 1000);
    });
  });


  /***********************
   *
   *  STRIATUM BUTTON
   *
   ***********************/
  $('#striatum-btn').click(function() {
    // Hide placeholder
    $('.placeholder-overlay').each(function() {
      $(this).fadeOut();
    });

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
      setTimeout(showInfo, 1000);
    });
  });


  /***********************
   *
   *  HYPOTHALAMUS BUTTON
   *
   ***********************/
  $('#hypothalamus-btn').click(function() {
    // Hide placeholder
    $('.placeholder-overlay').each(function() {
      $(this).fadeOut();
    });

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
      setTimeout(showInfo, 1000);
    });
  });



  /*
  ==============================================
  Video Controls
  ==============================================
  */
  $('.carousel-caption').click(function() {
    $(this.dataset.video)[0].play();
    $('.video-btn').removeClass('active');
    $(this.dataset.videoButton).addClass('active');
    $(this.parentElement.parentElement.parentElement).carousel('pause');
  });
  /***********************
   *
   *  CORTEX VIDEOS
   *
   ***********************/
   $('#cortex-vid').click(function() {
     $('#cortex-vid')[0].play();
     $('#cortex-carousel').carousel('pause');
     $('.video-btn').removeClass('active');
     $('#cortex-vid-btn').addClass('active');
   });
   $('#cortex-vid-btn').click(function() {
     $('#cortex-vid')[0].play();
     $('#cortex-carousel').carousel('pause');
     $('.video-btn').removeClass('active');
     $('#cortex-vid-btn').addClass('active');
   });

  /***********************
   *
   *  HIPPOCAMPUS VIDEOS
   *
   ***********************/
   $('#hippocampus-vid').click(function() {
    $('#hippocampus-vid')[0].play();
    $('#hippocampus-carousel').carousel('pause');
    $('.video-btn').removeClass('active');
    $('#hippocampus-vid-btn').addClass('active');
   });
   $('#hippocampus-vid-btn').click(function() {
    $('#hippocampus-vid')[0].play();
    $('#hippocampus-carousel').carousel('pause');
    $('.video-btn').removeClass('active');
    $('#hippocampus-vid-btn').addClass('active');
   });

  $('#hippocampus-drug-vid').click(function() {
    $('#hippocampus-drug-vid')[0].play();
    $('#hippocampus-carousel').carousel('pause');
    $('.video-btn').removeClass('active');
    $('#hippocampus-drug-vid-btn').addClass('active');
   });
   $('#hippocampus-drug-vid-btn').click(function() {
    $('#hippocampus-drug-vid')[0].play();
    $('#hippocampus-carousel').carousel('pause');
    $('.video-btn').removeClass('active');
    $('#hippocampus-drug-vid-btn').addClass('active');
   });

  $('#hippocampus-behavior-vid').click(function() {
    $('#hippocampus-behavior-vid')[0].play();
    $('#hippocampus-carousel').carousel('pause');
    $('.video-btn').removeClass('active');
    $('#hippocampus-behavior-vid-btn').addClass('active');
   });
   $('#hippocampus-behavior-vid-btn').click(function() {
    $('#hippocampus-behavior-vid')[0].play();
    $('#hippocampus-carousel').carousel('pause');
    $('.video-btn').removeClass('active');
    $('#hippocampus-behavior-vid-btn').addClass('active');
   });

   /***********************
   *
   *  STRIATUM VIDEOS
   *
   ***********************/
   $('#striatum-vid').click(function() {
     $('#striatum-vid')[0].play();
     $('#striatum-carousel').carousel('pause');
     $('.video-btn').removeClass('active');
     $('#striatum-vid-btn').addClass('active');
   });
   $('#striatum-vid-btn').click(function() {
     $('#striatum-vid')[0].play();
     $('#striatum-carousel').carousel('pause');
     $('.video-btn').removeClass('active');
     $('#striatum-vid-btn').addClass('active');
   });

  /***********************
   *
   *  HYPOTHALAMUS VIDEOS
   *
   ***********************/
   $('#hypothalamus-vid').click(function() {
     $('#hypothalamus-vid')[0].play();
     $('#hypothalamus-carousel').carousel('pause');
     $('.video-btn').removeClass('active');
     $('#hypothalamus-vid-btn').addClass('active');
   });
   $('#hypothalamus-vid-btn').click(function() {
     $('#hypothalamus-vid')[0].play();
     $('#hypothalamus-carousel').carousel('pause');
     $('.video-btn').removeClass('active');
     $('#hypothalamus-vid-btn').addClass('active');
   });
}