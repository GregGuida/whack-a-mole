var app = app || {};

(function () {

  app.Hole = Backbone.Model.extend({
    initialize: function() { 

    }
  });

  app.Holes = Backbone.Collection.extend({
    model: app.Hole,
  });

  app.holes = new app.Holes([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ])

})();