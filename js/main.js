function hideAll () {
  $('.sprite').each(function() {
    $(this).hide();
  });
  $('.description-container').each(function() {
    $(this).hide();
  });
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
  $('.video-btn').click(function() {
    var thisVideoSelector = this.dataset.video;
    $('.video-btn').each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    $(thisVideoSelector)[0].play();

    // pause carousel
    $(this.parentElement.dataset.target).carousel('pause');
  });

  //$('#mouse-hippocampus-carousel .active').index()
  $('.carousel').on('slid.bs.carousel', function() {
    var activeCarouselItemSelector = '#' + this.id + ' .active'
    var carouselItemSelector = '#' + this.id + ' .item'
    //console.log(activeCarouselItemSelector);
    //console.log(carouselItemSelector)
    var currentIndex = $(activeCarouselItemSelector).index(/*carouselItemSelector*/);
    console.log(this.id + ' slid to ' + currentIndex + '!');
  });
}