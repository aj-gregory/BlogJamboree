JournalApp.Views.CommentsIndex = Backbone.View.extend({
  template: JST['comments/index'],

  initialize: function() {
  	this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'remove', this.render);
  },

	events: {
    "click .delete":"deleteComment"
	},

	render: function() {
		renderedContent = this.template({
			comments: this.collection
		});

		this.$el.html(renderedContent);
		return this;
	},

	deleteComment: function(event) {
		var commentID = $(event.currentTarget).attr('data-id');
		var model = this.collection.get(commentID)
	  model.destroy();
	}
});