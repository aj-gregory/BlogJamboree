JournalApp.Views.PostEdit = Backbone.View.extend({
  template: JST['posts/edit'],

	events: {
		"submit form":"submit"
	}

	render: function() {

	},

	submit: function(event) {
		event.preventDefault();
	}
});