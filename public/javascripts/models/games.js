var app = app || {};

(function () {

  app.Game = Backbone.Model.extend({
    initialize: function() { 
      this.set("score",0);
    }
  });

  app.Games = Backbone.Collection.extend({
    model: app.Game,
  });

})();