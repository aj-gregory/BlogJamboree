JournalApp.Views.PostShow = Backbone.View.extend({

  template: JST['posts/show'],

	events: {
		'dblclick .title':"editTitle",
		'dblclick .body':"editBody",
		'blur .titleEditBox':"updateTitle",
		'blur .bodyEditBox':"updateBody",
		'click .commentsBtn':'showComments'
	},

	render: function() {
		renderedContent = this.template({
			post: this.model,
			postComments: this.model.postComments
		});

		this.$el.html(renderedContent);
		return this;
	},

	editTitle: function() {
		var boxTemp = JST['posts/titleEditBox'];
		box = boxTemp({
			attr: this.model.get('title')
		});

		this.$el.children('.title').html(box);
	},

	editBody: function() {
		var boxTemp = JST['posts/bodyEditBox'];
		box = boxTemp({
			attr: this.model.get('body')
		});

		this.$el.children('.body').html(box);
	},

	updateTitle: function(event) {
		var newTitle = $(event.currentTarget).val();
    this.model.set({
			"title":newTitle
		});

		this.model.save();
    this.$el.children('.title').html(newTitle);
	},

	updateBody: function(event) {
		var newBody = $(event.currentTarget).val();
    this.model.set({
			"body":newBody
		});

		this.model.save();
    this.$el.children('.body').html(newBody);
	},

  showComments: function(event) {
    var that = this;

    var postComments = new JournalApp.Collections.PostComments([], {
      post: this.model
    });

    postComments.fetch();

    console.log("success")
  },

	addComment: function(event) {
		var newComment = new JournalApp.Models.Comment();
		var commentBody = $('.newComment').val();
    $('.newComment').html("");

		newComment.set({
      "body":commentBody
    });

		this.model.postComments.add(newComment);
		this.model.save();

    $('.comments').append('<li>' + newComment.escape('body') + '</li>');
	}
});