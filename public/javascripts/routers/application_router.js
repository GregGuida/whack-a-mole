var app = app || {};

(function () {

  app.ApplicationRouter = Backbone.Router.extend({

    routes: {
      ""            :    "index",
      "play"        :    "play",
      "high_scores" :    "high_scores",
      "game_over"   :    "game_over"
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

    play: function() {
      app.game = new app.Game();

      var title_view = new app.ScoreView({ model: app.game });

      $("#content").empty();
      $("#content").append(title_view.render().el);

      var $holes = $("<div id='holes'>").appendTo("#content");
      app.holes.each(function(hole){
        hole.set('view', new app.HoleView({ model: hole }));
        $holes.append(hole.get('view').render().el);
      });

      $('.mole_view').animate({bottom:0},1000);

      // This is pretty bad form but for some reason
      // using requestAnimationFrame in the callback 
      // of $.animate causes the loop to run at 10x.
      setTimeout(app.game_loop,1000);
    },

    game_over: function(){
      app.game = app.game || new app.Game();
      var submit_score_view = new app.SubmitScoreView({ model: app.game });
      $("#content").append(submit_score_view.render().el);
    },

    high_scores: function() {
      var title_view = new app.TitleView();
      var high_score_view = new app.HighScoreView({ collection: app.games });

      app.games.fetch();

      $("#content").empty();
      $("#content").append(title_view.render().el);

      var $holes = $("<div id='holes'>").appendTo("#content");
      app.holes.each(function(hole){
        hole.set('view', new app.HoleView({ model: hole }));
        $holes.append(hole.get('view').render().el);
      });
      
      $("#content").append(high_score_view.render().el);
    }

  });

})();
