JournalApp.Views.PostShow = Backbone.View.extend({

  template: JST['posts/show'],

  events: {
    'dblclick .title':"editTitle",
    'dblclick .body':"editBody",
    'blur .titleEditBox':"updateTitle",
    'blur .bodyEditBox':"updateBody",
    'click .commentsBtn':'showComments',
    'click .addCommentBtn':'addComment',
    'click .delete':'deletePost',
    'click .tagBtn':'tagPost',
    'click .addTag':'addTag'
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
    var commentFormTemp = JST['posts/comment_form'];
    var that = this;

    this.model.postComments = new JournalApp.Collections.PostComments([], {
      post: this.model
    });

    this.model.postComments.fetch({
      success: function(data) {
        var commentIndexView = new JournalApp.Views.CommentsIndex({
          collection: that.model.postComments
        });
        that.$el.find('.modal-body').html(commentIndexView.render().$el);
      }
    });

    this.$el.find('.modal-footer').html(commentFormTemp());
  },

  addComment: function() {
    var that = this;
    var newComment = new JournalApp.Models.Comment();
    var commentBody = this.$el.find('.commentBox').val();

    newComment.set({
      "post_id": this.model.get('id'),
      "body": commentBody
    });

    this.model.postComments.create(newComment, {
      success: function() {
        that.showComments();
      }
    });
  },

  tagPost: function() {
    var that = this;
    
    if ($('.tags').length < 1){
      $.ajax ({
        url: "/posts/" + this.model.get('id') + "/tags",
        type: 'GET',
        success: function(data) {
          data.forEach( function(tag) {
            if ($.inArray(tag.body, that.model.tags()) === -1) {
              that.model.tags().push(tag.body);
            }
          });

          that.$el.find('.panel-footer').append("<div class='tags remove'></div>")
       
          that.model.tags().forEach(function(tag) {
            that.$el.find('.tags').append("<br><a>" + tag +"</a>"); 
          });

          that.$el.find('.panel-footer').append(
            "<br class='remove'><input type='text' class='newTag remove'><a class='addTag remove glyphicon glyphicon-tag btn btn-default btn-sm'> </a>"
          );
        }
      });
    } else {
      $('.remove').remove();
    }
  },

  addTag: function() {
    var that = this;
    var newTag = $('.newTag').val();

    $.ajax ({
      url: "/posts/" + this.model.get('id') + "/tags",
      type: 'POST',
      data: {
        body: newTag
      },
      success: function() {
        that.model.tags().push(newTag);
        that.$el.find('.tags').append("<br><a>" + newTag +"</a>");
      }
    });
  },

  deletePost: function() {
    this.model.destroy();
    this.$el.empty();
  }
});