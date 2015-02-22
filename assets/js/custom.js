window.onload = function() {
 var owl = $('.owl-carousel');
 var sprite = new Motio($('.sprite')[0], {
    fps: 20,
    frames: 31
  });
  sprite.toEnd(false, function() {
    owl.trigger('owl.play', 5000);
  });

  $('#play').click(function() {
    var owl = $(this.dataset.target);
    owl.trigger('owl.next');
    owl.trigger('owl.play',5000); //owl.play event accept autoPlay speed as second parameter
  });

  $('#pause').click(function() {
    var owl = $(this.dataset.target);
    owl.trigger('owl.stop');
  });

  $('.video').each(function() {
    this.onplay = function() {
      owl.trigger('owl.stop');
      console.log('video playing!');
    };
    this.onended = function () {
      owl.trigger('owl.play', 5000);
      console.log('video ended!');
    };
  });
}