var app = app || {};

(function () {

  app.MoleView = Backbone.View.extend({

    tagName: "div",

    className: "mole_view",

    template: _.template(
      "<div class='mole'> \
        <div class='snout'></div> \
        <div class='nose'></div> \
        <div class='eye-border left'> \
            <div class='eye'></div> \
        </div> \
        <div class='xeye left'>&times;</div> \
        <div class='eye-border right'> \
            <div class='eye'></div> \
        </div> \
        <div class='xeye right'>&times;</div> \
        <div class='body'> \
        </div> \
        <div class='tooth left'></div> \
        <div class='tooth right'></div> \
        <div class='whisker top left'></div> \
        <div class='whisker top right'></div> \
        <div class='whisker middle left'></div> \
        <div class='whisker middle right'></div> \
        <div class='whisker bottom left'></div> \
        <div class='whisker bottom right'></div> \
      </div>"
    ),

    events: {
      // "keypress .name":          "update",
      // "keypress .address":       "update",
      // "click .delete":           "destroy"
    },

    initialize: function() {
      return this;
    },

    render: function() {
      this.$el.html(this.template(/*this.model.attributes*/));
      return this;
    },

    destroy: function() {
      return this;
    }

  });

})();