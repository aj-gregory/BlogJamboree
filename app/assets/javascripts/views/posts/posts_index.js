JournalApp.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function() {
  	this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'change:title', this.render);
		this.listenTo(this.collection, 'remove', this.render);
		this.listenTo(this.collection, 'reset', this.render);
  },

	events: {
    "click .delete":"deletePost"
	},

	render: function() {
		renderedContent = this.template({
			posts: this.collection
		});

		this.$el.html(renderedContent);
		return this;
	},

	deletePost: function(event) {
		var postID = $(event.currentTarget).attr('data-id');
		var model = this.collection.get(postID)
		model.destroy({
			success: function() {
				alert("DELETED!");
			}
		});
	}

});
