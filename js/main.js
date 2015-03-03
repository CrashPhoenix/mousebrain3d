function hideAll () {
  $('.sprite').each(function() {
    $(this).hide();
  });
  $('.description-container').each(function() {
    $(this).hide();
  });
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
    $('.section-tab').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    $('.section-content').each(function() {
      $(this).hide();
    });
    $(this.dataset.section).fadeIn();
    $('.placeholder-overlay').each(function() {
      $(this).css('display', 'inline-block');
    });
    $('.menu-btn').each(function() {
      $(this).removeClass('active');
    });
    //contractInfo();
    hideAll();
  });

  /*
  ==============================================
  Menu Controls
  ==============================================
  */
  $('.menu-btn').click(function() {
    var thisId = this.id;
    var thisBrainSection = this.dataset.brainSection;
    var thisSection = this.dataset.section;
    var thisSpriteSelector = '#' + thisSection + '-' + thisBrainSection;
    var thisDataSection = '[data-section="' + thisSection + '"]';
     var thisSectionDescriptionSelector = '#brain-info-overlay'
                                          + thisDataSection + ' #'
                                          + thisBrainSection + '-description';

    // Hide placeholder
    $('.placeholder-overlay').each(function() {
      $(this).fadeOut();
    });

    // Hide info overlay
    $('#brain-info-overlay' + thisDataSection).addClass('beforeAnimation');
    $('#brain-info-overlay' + thisDataSection).removeClass('stretchRight');

    // Check here if clicked already and return if so
    if($(this).data('clicked') == 'yes') return;
    turnOffClick('#' + thisId);

    // Turn off other sections
    placeholder.hide();
    $('.sprite').each(function() {
      $(this).hide();
    });
    $('.menu-btn').each(function() {
      $(this).removeClass('active');
    });
    $('.description-container').each(function() {
      $(this).hide();
    });

    // Turn on this section
    $(this).addClass('active');
    $(thisSpriteSelector).show();
    $(thisSectionDescriptionSelector).fadeIn();

    var sprite = new Motio($(thisSpriteSelector)[0], {
      fps: 20,
      frames: 31
    });

    sprite.play();
    sprite.toEnd(false, function() {
      turnOnClick('#' + thisId);
      setTimeout(function() {
        $('#brain-info-overlay' + thisDataSection).removeClass('beforeAnimation');
        $('#brain-info-overlay' + thisDataSection).addClass('stretchRight');
      }, 1000);
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