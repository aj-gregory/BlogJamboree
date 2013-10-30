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

		$('body').html(view.render().$el);
	},

	postShow: function(id) {
    view = new JournalApp.Views.PostShow({
    	model: JournalApp.posts.get(id)
    });

		$('body').html(view.render().$el);
	},

	postEdit: function(id) {
		view = new JournalApp.Views.PostForm({
			model: JournalApp.posts.get(id)
		});

		$('body').html(view.render().$el);
	},

	postNew: function() {
		model = new JournalApp.Models.Post();
		view = new JournalApp.Views.PostForm({
			model: model,
			collection: JournalApp.posts
		});

		$('body').html(view.render().$el);
	}
});
