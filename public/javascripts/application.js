var app = app || {};

(function () {
  $(function() {
    new app.ApplicationRouter();
    Backbone.history.start({pushState: true});
  });

  app.game_loop = function(){
    app.game.game_step();

    if ( app.game.get("step_number") < app.game.get("step_count") ) {
      app.game.set("step_number", app.game.get("step_number")+1);
      app.animation_frame = requestAnimationFrame(app.game_loop);
    }
  };
})();

function pad(n, width, pad_char) {
  pad_char = pad_char || '0'; 
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(pad_char) + n;
}