var app = app || {};

(function () {

  app.TitleView = Backbone.View.extend({

    tagName: "div",

    className: "title_view",

    template: _.template(
      "<h1 id='title'> Smack-A-Mole </h1>"+
      "<a href='/play'>Play Game</div>"+
      "<a href='/high_scores'>High Scores</div>"
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
    }

  });

})();