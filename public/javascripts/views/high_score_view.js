var app = app || {};

(function () {

  app.HighScoreView = Backbone.View.extend({

    tagName: "div",

    className: "high_score_view",

    score_template: _.template(
      "<div class='row'>"+
        "<div><%= i+1 %>.</div>"+
        "<div class='name'><%= name %></div>"+
        "<div class='score'><%= score %></div>"+
      "</div>"
    ),

    events: {
      // "keypress .name":          "update",
      // "keypress .address":       "update",
      // "click .delete":           "destroy"
    },

    initialize: function() {
      this.listenTo(this.collection, 'sync', this.render)
      return this;
    },

    render: function() {
      var self = this;

      self.$el.empty();
      console.log('render hi score view')

      self.collection.each(function( game, index ){
        self.$el.append(self.score_template({
          i: index,
          name: game.get('name'),
          score: game.format_score()
        }));
      });

      return self;
    },

    destroy: function() {
      return this;
    }

  });

})();