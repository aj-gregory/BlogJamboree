JournalApp.Views.BlogsFind = Backbone.View.extend({
  template: JST['blogs/find'],

  render: function() {

    var blogs = this.collection;

    blogs.comparator = function(blog) {
      return -blog.followers().length
    };
    
    blogs.sort();

    renderedContent = this.template({
      blogs: blogs
    });

    this.$el.html(renderedContent);
    return this;
  }
});