JournalApp.Routers.Blogs = Backbone.Router.extend({

  routes: {
    "":"blogsIndex",
    "blogs/new":"blogNew",
    "blogs/:id":"blogShow",
    "blogs/:id/edit":"blogEdit"
  },

  blogsIndex: function() {
    var view = new JournalApp.Views.BlogsIndex({
      collection: JournalApp.blogs
    });

    var firstBlogView = new JournalApp.Views.BlogShow({
      model: JournalApp.blogs.first()
    })

    $('.sidebar').html(view.render().$el);
    $('.content').html(firstBlogView.render().$el);
  },

  blogShow: function(id) {
    var view = new JournalApp.Views.BlogShow({
      model: JournalApp.blogs.get(id),
    });

    this.swapView(view);
  },

  blogEdit: function(id) {
    var view = new JournalApp.Views.BlogForm({
      model: JournalApp.blogs.get(id)
    });

    this.swapView(view);
  },

  blogNew: function() {
    var model = new JournalApp.Models.Blog();
    var view = new JournalApp.Views.BlogForm({
      model: model,
      collection: JournalApp.blogs
    });

    this.swapView(view, '.content');
  },

  swapView: function(newView, el) {
    if(this.lastView){
      this.lastView.remove();
    }

    this.lastView = newView;

    this.blogsIndex()
    $('.content').html(newView.render().$el);
  }
});
