var app = app || {};

(function () {

  app.Game = Backbone.Model.extend({
    initialize: function() { 
      this.set("step_number",0);
      this.set("step_count",60*60);
    },

    routine: [
      1, 0, 0, 1, 1, 0, 0, 0, 2, 1,
      0, 0, 2, 0, 3, 1, 2, 0, 0, 1,
      2, 3, 1, 0, 0, 4, 2, 4, 0, 0,
      3, 3, 1, 3, 1, 0, 0, 2, 5, 1,
      0, 0, 3, 2, 4, 4, 0, 0, 4, 5,
      0, 0, 6, 3, 0, 0, 9, 0, 9, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],

    url: "/games",

    defaults: {
      'score': 0
    },

    game_step: function(){
      var seconds_elapsed = this.get('step_number')/60

      if ( seconds_elapsed === Math.floor(seconds_elapsed) ){
        // check the routine for # of moles to be launched
        _.times(this.routine[seconds_elapsed],function(i){
          // find a free hole and launch a mole in it
          var free_holes = app.holes.where({'free':true})
          if (free_holes.length !== 0) {
            free_holes[_.random(0,free_holes.length-1)].get('view').launch_mole();
          };
        })
      }

      // animate all the holes
      app.holes.each(function(hole){
        hole.get('view').draw_step();
      })
    },

    format_score: function() {
      return pad(this.get('score'),6);
    },

    format_time: function() {
      var steps_remaining = this.get('step_count') - this.get('step_number'),
          seconds = steps_remaining/60,
          fractions_of_a_second = seconds - Math.floor(seconds) + '';
      return pad(Math.floor(seconds),2) + ":" + pad(fractions_of_a_second.substr(2,2),2);
    }

  });

  app.Games = Backbone.Collection.extend({
    model: app.Game,
    url: "/games"
  });

  app.games = new app.Games();

})();