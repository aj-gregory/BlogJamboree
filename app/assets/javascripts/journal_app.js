window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		//debugger
		JournalApp.posts = new JournalApp.Collections.Posts();
		JournalApp.posts.fetch({
			success: function(){
		    new JournalApp.Routers.Posts();
				Backbone.history.start();
			}
		})
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
