JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

	render: function() {
		renderedContent = this.template({
			post: this.model
		});

		this.$el.html(renderedContent);
		return this;
	}
});