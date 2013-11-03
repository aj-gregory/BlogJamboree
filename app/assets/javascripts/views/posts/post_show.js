JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],

	events: {
		'dblclick .title':"editTitle",
		'dblclick .body':"editBody",
		'blur .titleEditBox':"updateTitle",
		'blur .bodyEditBox':"updateBody",
		'click .addCommentBtn':'addComment'
	},

	render: function() {
		renderedContent = this.template({
			post: this.model,
			postComments: this.model.comments()
		});
		console.log(this.model.comments())

		this.$el.html(renderedContent);
		return this;
	},

	editTitle: function() {
		var boxTemp = JST['posts/titleEditBox'];
		box = boxTemp({
			attr: this.model.get('title')
		});

		$('.title').html(box);
	},

	editBody: function() {
		var boxTemp = JST['posts/bodyEditBox'];
		box = boxTemp({
			attr: this.model.get('body')
		});

		$('.body').html(box);
	},

	updateTitle: function(event) {
		var newTitle = $(event.currentTarget).val();
    this.model.set({
			"title":newTitle
		});

		this.model.save();
		this.render();
	},

	updateBody: function(event) {
		var newBody = $(event.currentTarget).val();
    this.model.set({
			"body":newBody
		});

		this.model.save();
		this.render();
	},

	addComment: function(event) {
		var newComment = new JournalApp.Models.Comment();
		var commentBody = $('.newComment').val();
		newComment.set({body: commentBody});
		this.model.postComments.add(newComment);
		this.model.save();
		this.render();
	}
});