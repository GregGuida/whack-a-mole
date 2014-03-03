var app = app || {};

(function () {

  app.ApplicationRouter = Backbone.Router.extend({

    routes: {
      ""            :    "index",
      "play"        :    "play",
      "high_scores" :    "high_scores"
    },

    index: function() {
      var title_view = new app.TitleView();
      var holes_view = new app.HolesView({collection: app.holes});
      
      $("#content").empty();
      $("#content").append(title_view.render().el);
      $("#content").append(holes_view.render().el);
    },

    play: function(id) {

    },

    high_scores: function(id) {

    }

  });

})();
