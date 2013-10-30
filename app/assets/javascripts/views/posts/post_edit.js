JournalApp.Views.PostEdit = Backbone.View.extend({
  template: JST['posts/edit'],

	events: {
		"submit form":"submit"
	},

	render: function() {
		renderedContent = this.template({
			post: this.model
		});

		this.$el.html(renderedContent);
		return this;
	},

	submit: function(event) {
		event.preventDefault();

		var formData = $(event.currentTarget).serializeJSON();

		this.model.set({
			'title':formData.post.title,
			'body':formData.post.body
		});

		this.model.save({}, {
 			success: function () {
 				Backbone.history.navigate("/", { trigger: true });
 			},
		});
	}
});