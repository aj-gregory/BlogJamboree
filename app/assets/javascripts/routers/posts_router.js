JournalApp.Routers.Posts = Backbone.Router.extend({

	routes: {
  	"":"postsIndex",
		"posts/new":"postNew",
		"posts/:id":"postShow",
		"posts/:id/edit":"postEdit"
  },

	postsIndex: function() {
    view = new JournalApp.Views.PostsIndex({
    	collection: JournalApp.posts
    });

		$('.sidebar').html(view.render().$el);
		//$('.content').empty();
	},

	postShow: function(id) {
    view = new JournalApp.Views.PostShow({
    	model: JournalApp.posts.get(id)
    });

		$('.content').html(view.render().$el);
		this.postsIndex();
	},

	postEdit: function(id) {
		view = new JournalApp.Views.PostForm({
			model: JournalApp.posts.get(id)
		});

		$('.content').html(view.render().$el);
		this.postsIndex();
	},

	postNew: function() {
		model = new JournalApp.Models.Post();
		view = new JournalApp.Views.PostForm({
			model: model,
			collection: JournalApp.posts
		});

		$('.content').html(view.render().$el);
		this.postsIndex();
	}
});
