var app = app || {};

(function () {

  app.TitleView = Backbone.View.extend({

    tagName: "div",

    className: "title_view",

    events: {
      'click .play': "_nav_play",
      'click .high_score': "_nav_hi_score"
    },

    template: _.template(
      "<h1 id='title'> Smack-A-Mole </h1>"+
      "<a class='play' href='/play'>Play Game</div>"+
      "<a class='high_score' href='/high_scores'>High Scores</div>"
    ),

    initialize: function() {
      return this;
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    },

    destroy: function() {
      return this;
    },

    _nav_play: function(e){
      e.preventDefault();
      app.application_router.navigate("/play", {trigger: true});
    },

    _nav_hi_score: function(e){
      e.preventDefault();
      app.application_router.navigate("/high_scores", {trigger: true});
    }

  });

})();