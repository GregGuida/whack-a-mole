var app = app || {};

(function () {

  app.ScoreView = Backbone.View.extend({

    tagName: "div",

    className: "score_view",

    template: _.template(""),

    events: {
      // "keypress .name":          "update",
      // "keypress .address":       "update",
      // "click .delete":           "destroy"
    },

    initialize: function() {
      return this;
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    },

    destroy: function() {
      return this;
    }

  });

})();