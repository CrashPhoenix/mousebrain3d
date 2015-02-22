window.onload = function() {
 var sprite = new Motio($('.sprite')[0], {
    fps: 20,
    frames: 31
  });
  sprite.toEnd(false, function() {
    owl.play();
  });
}