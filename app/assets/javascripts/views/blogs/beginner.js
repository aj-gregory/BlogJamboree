JournalApp.Views.Beginner = Backbone.View.extend({
  template: JST['blogs/beginner'],

  initialize: function(opts) {
    this.user = opts.user
  },

  render: function() {
    var renderedContent = this.template({
      user: this.user
    });

    this.$el.html(renderedContent);
    return this;
  }
});