var app = app || {};

(function () {

  app.HoleView = Backbone.View.extend({

    tagName: "div",

    className: "hole_view",

    events: {
      'click': '_check_hit',
      'ontouchend': '_check_hit'
    },

    initialize: function() {
      this.mole_view = new app.MoleView();

      this.$screen = $("<div class='screen'></div>");
      this.$hole_top = $("<div class='hole top'></div>");
      this.$hole_bottom = $("<div class='hole bottom'></div>");
      this.$mole_view = this.mole_view.$el;

      this.mole_height = 0;
      this.max_mole_height = 80;

      return this;
    },

    render: function() {
      var self = this;
      var z_index = self.model.get('id') * 10;

      self.$el.attr("id","hole"+self.model.get("id"));

      self.$el.empty();
      
      self.$el.css('z-index', z_index);

      this.$hole_top.appendTo(this.el).css('z-index', z_index+1);
      this.mole_view.render().$el.appendTo(this.el).css('z-index', z_index+2);
      this.$screen.appendTo(this.el).css('z-index', z_index+3);
      this.$hole_bottom.appendTo(this.el).css('z-index', z_index+4);

      return self;
    },

    destroy: function() {
      return this;
    },

    launch_mole: function() {
      this.mole = new app.Mole({ hole: this.model.get('id') });
      app.moles.add(this.mole);
      this.model.set("free", false);
      this.mole.set("state", "ascending");
      this.$mole_view.removeClass('hit');
    },
    
    draw_step: function() {
      // No point in animating if there's no mole in this hole
      if ( !!this.mole ) {

        // If the mole is hit its going down 
        if ( this.mole.get("hit") ) {

          // If we got to the bottom free the hole
          if ( this._get_mole_height() <= 0 ) {
            this._set_mole_height(0);
            this.model.set("free", true);
            this.mole = null;
          } else {
            // dead moles drop twice as fast
            this._incr_mole_height(this.max_mole_height/-29);
          }

        } else {

          // If the mole is not hit check if its ascending or descending
          if ( this.mole.get("state") === "ascending" ) {

            // If we're at the top start going back down;
            if ( this._get_mole_height() >= this.max_mole_height ) {
              this._set_mole_height(this.max_mole_height);
              this.mole.set("state","descending") 
            } else {
              // Increment to get to the max height in 58 frames
              this._incr_mole_height(this.max_mole_height/58);
            }

          }
          else if ( this.mole.get("state") === "descending" ) {

            // If we got to the bottom free the hole
            if ( this._get_mole_height() <= 0 ) {
              this._set_mole_height(0);
              this.model.set("free", true);
              this.mole = null;
            } else {
              // Increment to get to the bottom in 58 framss
              this._incr_mole_height(this.max_mole_height/-58);
            }
          }

        }
      }
    },

    _check_hit: function() {
      if ( !!this.mole && !this.mole.get('hit') ) {
        this.mole.set('hit',true);
        this.$mole_view.addClass("hit");
        app.game.set('score',app.game.get('score')+100);
      }
    },

    _set_mole_height: function ( height ) {
      this.mole_height = height;
      this.$mole_view.css('bottom', height);
    },

    _get_mole_height: function ( ) {
      return this.mole_height;
    },

    _incr_mole_height: function ( increment ) {
      this.mole_height += increment;
      this.$mole_view.css('bottom', this.mole_height);
    }

  });

})();