JournalApp.Views.BlogsFind = Backbone.View.extend({
  template: JST['blogs/find'],

  render: function() {
    renderedContent = this.template({
      blogs: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }
});