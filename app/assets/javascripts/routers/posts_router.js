JournalApp.Routers.Posts = Backbone.Router.extend({
  routes: {
  	"":"postsIndex",
		"posts/:id":"postShow"
  },

	postsIndex: function() {
    view = new JournalApp.Views.PostsIndex({
    	collection: JournalApp.posts
    });

		$('body').append(view.render().$el);
	},

	postShow: function() {

	}
});
