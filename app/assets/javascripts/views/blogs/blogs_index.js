JournalApp.Views.BlogsIndex = Backbone.View.extend({
  template: JST['blogs/index'],

  initialize: function() {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change:title', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'reset', this.render);
  },

  events: {
    'submit':'searchPosts'
  },

  render: function() {
    renderedContent = this.template({
      blogs: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  searchPosts: function() {
    var searchTerm = $('.searchBar').val();
    Backbone.history.navigate('tags/' + searchTerm, {trigger: true});
  }

});