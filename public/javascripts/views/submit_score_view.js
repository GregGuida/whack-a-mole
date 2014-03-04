var app = app || {};

(function () {

  app.SubmitScoreView = Backbone.View.extend({

    tagName: "div",

    className: "submit_score_view",

    template: _.template(
      "<h2>Enter Initials</h2>"+
      "<form id='submit_score' method='post' action='/games'>"+
        "<input type='text' name='name' maxlength='3' />"+
        "<input type='hidden' name='score' value='<%= score %>' />"+
        "<input type='submit' name='submit' value='Submit Score' /></form>"
    ),

    events: {
      'submit form': '_submit_game'
    },

    initialize: function() {
      this.$el.delegate()
      return this;
    },

    render: function() {
      this.$el.html(this.template({ score: this.model.get('score') }));
      this.$el.find('input[name=name]')[0].focus();
      this.$el.find('input[name=name]')[0].select();
      return this;
    },

    destroy: function() {
      return this;
    },

    _submit_game: function(e) {
      e.preventDefault();
      var name = this.$el.find('input[name=name]').val();
      if ( !!name ) {
        app.game.set('name', name);
        app.game.save();
        app.application_router.navigate("/high_scores", {trigger: true});
      }
    }

  });

})();