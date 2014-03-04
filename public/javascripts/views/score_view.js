var app = app || {};

(function () {

  app.ScoreView = Backbone.View.extend({

    tagName: "div",

    className: "score_view",

    template: _.template(
      "<h2 id='score'>Score: <span id='score_val'><%= score %><span></h1>"+
      "<h3 id='time'>Time: <span id='time_val'><%= time %><span></div>"
    ),

    initialize: function() {
      this.listenTo(this.model, 'change:step_number', this._change_time);
      this.listenTo(this.model, 'change:score', this._change_score);
      return this;
    },

    render: function() {
      this.$el.html(this.template({
        score: this.model.format_score(),
        time: this.model.format_time()
      }));
      return this;
    },

    destroy: function() {
      return this;
    },

    _change_time: function() {
      this.$el.find('#time_val').html(this.model.format_time());
    },

    _change_score: function() {
      this.$el.find('#score_val').html(this.model.format_score());
      this.$el.find('#score_val').stop().css("color", "#FFFF9C").animate({ 'color': "#FFFFFF"}, 500);
    }

  });

})();