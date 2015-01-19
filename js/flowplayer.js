$(function () {
  $("#overlay-player").flowplayer({
    splash: true,
    qualities: "360p",
    defaultQuality: "360p",
    // set keyboard to false if you don't want to use closeOnEsc: false for overlay
    // keyboard: false,
    rtmp: "rtmp://s3b78u0kbtx79q.cloudfront.net/cfx/st",
    ratio: 9/16
  });

  var api = $("#overlay-player").data("flowplayer");

  $("#cortex-vid").overlay({
    target: "#overlay",
    closeOnEsc: false, // see comment on flowplayer keyboard option above
    top: "10%",
    left: "20%",
    mask: {
      color: "#000",
      opacity: 0.3
    },
    speed: "slow",
    onBeforeLoad: function () {
      api.load([{
        mp4: "media/Cortex-SD.mp4"
      }]);
    },
    onBeforeClose: function (e) {
      if (api.loading) {
        e.preventDefault();
      } else {
        // important! unload the player
        api.unload();
      }
    }
  });
});