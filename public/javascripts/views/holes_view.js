var app = app || {};

(function () {

  app.HolesView = Backbone.View.extend({

    tagName: "div",

    className: "holes_view",

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
      var self = this;
      self.$el.empty();
      self.collection.each(function(hole){
        var sub_view = new app.HoleView({model: hole});
        self.$el.append(sub_view.render().el);
      });
      return self;
    },

    destroy: function() {
      return this;
    }

  });

})();