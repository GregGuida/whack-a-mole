var app = app || {};

(function () {

  app.Mole = Backbone.Model.extend({
    initialize: function() { 

    }
  });

  app.Moles = Backbone.Collection.extend({
    model: app.Mole,
  });

})();