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
        score: this._format_score(),
        time: this._format_time()
      }));
      return this;
    },

    destroy: function() {
      return this;
    },

    _change_time: function() {
      this.$el.find('#time_val').html(this._format_time());
    },

    _change_score: function() {
      this.$el.find('#score_val').html(this._format_score());
      this.$el.find('#score_val').stop().css("color", "#FFFF9C").animate({ 'color': "#FFFFFF"}, 500);
    },

    _format_score: function() {
      return pad(this.model.get('score'),6);
    },

    _format_time: function() {
      var steps_remaining = this.model.get('step_count') - this.model.get('step_number'),
          seconds = steps_remaining/60,
          fractions_of_a_second = seconds - Math.floor(seconds) + '';
      return pad(Math.floor(seconds),2) + ":" + pad(fractions_of_a_second.substr(2,2),2);
    }

  });

})();