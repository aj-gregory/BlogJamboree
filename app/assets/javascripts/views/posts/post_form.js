JournalApp.Views.PostForm = Backbone.View.extend({
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
		var that = this;

		var formData = $(event.currentTarget).serializeJSON();

		this.model.set({
			'title':formData.post.title,
			'body':formData.post.body
		});

    if (!this.model.isNew()){
			this.model.save({}, {
	 			success: function () {
	 				Backbone.history.navigate("/", { trigger: true });
	 			}
			});
    } else {
			this.collection.create(this.model, {
	 			success: function () {
	 				Backbone.history.navigate("/", { trigger: true });
	 			},

				error: function () {
					console.log(this);
					that.collection.remove(this.model);
				}
			});
    }
	}
});