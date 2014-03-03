var app = app || {};

(function () {

  app.Mole = Backbone.Model.extend({
    initialize: function() { 
      this.set('hit',false);
    }
  });

  app.Moles = Backbone.Collection.extend({
    model: app.Mole,
  });

  app.moles = new app.Moles([])

})();