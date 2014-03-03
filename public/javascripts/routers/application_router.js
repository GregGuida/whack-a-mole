var app = app || {};

(function () {

  app.ApplicationRouter = Backbone.Router.extend({

    routes: {
      ""            :    "index",
      "play"        :    "play",
      "high_scores" :    "high_scores"
    },

    index: function() {
      var title_view = new app.TitleView();
      
      $("#content").empty();
      $("#content").append(title_view.render().el);

      app.holes.each(function(hole){
        hole.set('view', new app.HoleView({ model: hole }));
        $("#content").append(hole.get('view').render().el);
      });

    },

    play: function(id) {
      var title_view = new app.ScoreView({model: app.game});

      $("#content").empty();
      $("#content").append(title_view.render().el);

      app.holes.each(function(hole){
        hole.set('view', new app.HoleView({ model: hole }));
        $("#content").append(hole.get('view').render().el);
      });

      $('.mole_view').animate({bottom:0},1000);

      // This is pretty bad form but for some reason
      // using requestAnimationFrame in the callback 
      // of $.animate causes the loop to run at 10x.
      setTimeout(app.game_loop,1000);
      

      // show hi score view
    },

    high_scores: function(id) {

    }

  });

})();
