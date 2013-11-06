window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		JournalApp.blogs = new JournalApp.Collections.Blogs();
		JournalApp.blogs.fetch({
			success: function(){
		    new JournalApp.Routers.Blogs();
				Backbone.history.start();
			}
		})
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
