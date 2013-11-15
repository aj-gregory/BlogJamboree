JournalApp.Routers.Blogs = Backbone.Router.extend({

  routes: {
    "":"root",
    "blogs/new":"blogNew",
    "blogs/find":"blogsFind",
    "blogs/:id":"blogShow",
    "blogs/:id/edit":"blogEdit",
    "tags/:tag":"findByTag"
  },

  root: function() {
    var current_user = JSON.parse($('#current_user_json').html());
    var firstBlog = JournalApp.blogs.findWhere({
       user_id: current_user.id
    });

    if (firstBlog) { 
      var firstBlogView = new JournalApp.Views.BlogShow({
        model: firstBlog
      });
      this.swapView(firstBlogView);
    } else {
      var beginnerView = new JournalApp.Views.Beginner({
        user: current_user
      });
      this.swapView(beginnerView);
    }
  },

  blogsIndex: function() {
    var view = new JournalApp.Views.BlogsIndex({
      collection: JournalApp.blogs
    });

    $('.sidebar').html(view.render().$el);
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

  blogsFind: function() {
    var view = new JournalApp.Views.BlogsFind({
      collection: JournalApp.blogs
    });

    this.swapView(view, '.content');
  },

  findByTag: function(tag) {
    var that = this;
    var allPosts = new JournalApp.Collections.BlogPosts([], {blog: new JournalApp.Models.Blog()});

    allPosts.fetch({
      success: function(data){
        var taggedPosts = new JournalApp.Collections.BlogPosts([], {blog: new JournalApp.Models.Blog()});
        data.each(function(post) {
          if (post.postTags){
            post.postTags.forEach(function(postTag){
              if (tag.toLowerCase() === postTag.toLowerCase()){
                taggedPosts.add(post);
              }
            });
          }
        });
        that.searchResult(taggedPosts, tag);
      }
    });
  },

  searchResult: function(taggedPosts, tag) {
    var view = new JournalApp.Views.SearchShow({
      collection: taggedPosts,
      tagName: tag
    });

    this.swapView(view);
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
