JournalApp.Routers.Posts = Backbone.Router.extend({

	routes: {
  	"":"postsIndex",
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
		view = new JournalApp.Views.PostEdit({
			model: JournalApp.posts.get(id)
		});

		$('body').html(view.render().$el);
	}
});
