JournalApp.Routers.Posts = Backbone.Router.extend({

	routes: {
  	"":"postsIndex",
		"posts/new":"postNew",
		"posts/:id":"postShow",
		"posts/:id/edit":"postEdit"
  },

	postsIndex: function() {
    var view = new JournalApp.Views.PostsIndex({
    	collection: JournalApp.posts
    });

		$('.sidebar').html(view.render().$el);
		//$('.content').empty();
	},

	postShow: function(id) {
    var view = new JournalApp.Views.PostShow({
    	model: JournalApp.posts.get(id),
    });

		this.swapView(view);
	},

	postEdit: function(id) {
		var view = new JournalApp.Views.PostForm({
			model: JournalApp.posts.get(id)
		});

		this.swapView(view);
	},

	postNew: function() {
		var model = new JournalApp.Models.Post();
		var view = new JournalApp.Views.PostForm({
			model: model,
			collection: JournalApp.posts
		});

		this.swapView(view, '.content');
	},

  swapView: function(newView, el) {
    if(this.lastView){
      this.lastView.remove();
    }

    this.lastView = newView;

		$('.content').html(newView.render().$el);
		this.postsIndex();
  }
});
