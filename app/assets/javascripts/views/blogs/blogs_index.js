JournalApp.Views.BlogsIndex = Backbone.View.extend({
  template: JST['blogs/index'],

  initialize: function() {
  	this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'change:title', this.render);
		this.listenTo(this.collection, 'remove', this.render);
		this.listenTo(this.collection, 'reset', this.render);
  },

	events: {
    "click .delete":"deleteBlog",
	},

	render: function() {
		renderedContent = this.template({
			blogs: this.collection
		});

		this.$el.html(renderedContent);
		return this;
	},

	deleteBlog: function(event) {
		var blogID = $(event.currentTarget).attr('data-id');
		var model = this.collection.get(blogID)
		model.destroy();
	}

});