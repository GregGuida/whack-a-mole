var app = app || {};

(function () {

  app.HoleView = Backbone.View.extend({

    tagName: "div",

    className: "hole_view",

    template: _.template(
      "<div class='screen'></div>"+
      "<div class='hole top'></div>"+
      "<div class='hole bottom'></div>"
    ),

    events: {
    },

    initialize: function() {
      this.mole = new app.MoleView();
      return this;
    },

    render: function() {
      var self = this;
      var z_index = self.model.get('id') * 10;
      var el_order = [
        '.hole.top',
        '.mole_view',
        '.screen',
        '.hole.bottom']

      self.$el.empty();
      self.$el.append(self.template());
      self.$el.append(self.mole.render().el);


      self.$el.css('z-index', z_index);
      _.each(el_order, function(jq,i){  
        self.$el.find(jq).css('z-index', z_index+i+1);
      });

      return self;
    },

    destroy: function() {
      return this;
    }

  });

})();