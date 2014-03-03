var app = app || {};

$(function() {
  new app.ApplicationRouter();
  Backbone.history.start({pushState: true});
});