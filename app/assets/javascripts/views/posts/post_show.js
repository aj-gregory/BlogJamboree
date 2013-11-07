JournalApp.Views.PostShow = Backbone.View.extend({

  template: JST['posts/show'],

	events: {
		'dblclick .title':"editTitle",
		'dblclick .body':"editBody",
		'blur .titleEditBox':"updateTitle",
		'blur .bodyEditBox':"updateBody",
		'click .commentsBtn':'showComments',
    'click .addCommentBtn':'addComment',
    'click .delete':'deletePost'
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

  showComments: function() {
    commentTemp = JST['posts/comment_form']
    var that = this;

    this.model.postComments = new JournalApp.Collections.PostComments([], {
      post: this.model
    });

    this.model.postComments.fetch({
      success: function(data) {
        that.$el.find('.modal-body').empty();
        that.model.postComments.each(function(comment) {
          that.$el.find('.modal-body').append('<p>' + comment.escape('body') + '</p>')
        });
      }
    });

    this.$el.find('.modal-footer').html(commentTemp());
  },

	addComment: function() {
		var newComment = new JournalApp.Models.Comment();
		var commentBody = this.$el.find('.commentBox').val();

		newComment.set({
      "body":commentBody
    });

    this.model.postComments.add(newComment)
		this.model.save();

    this.$el.find('.modal-body').append('<p>' + newComment.escape('body') + '</p>');
	},

  deletePost: function() {
    this.model.destroy();
    this.$el.empty();
  }
});