JournalApp.Routers.Posts = Backbone.Router.extend({

	routes: {
  	"":"postsIndex",
		"posts/:id":"postShow"
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
	}
});
