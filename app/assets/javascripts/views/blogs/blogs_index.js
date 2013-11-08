JournalApp.Views.BlogsIndex = Backbone.View.extend({
  template: JST['blogs/index'],

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change:title', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function() {
    renderedContent = this.template({
      blogs: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }

});