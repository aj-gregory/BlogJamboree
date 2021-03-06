JournalApp.Views.PostShow = Backbone.View.extend({

  template: JST['posts/show'],

  events: {
    'click .commentsBtn':'showComments',
    'click .addCommentBtn':'addComment',
    'click .deletePost':'deletePost',
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
        that.$el.find('#comments-modal-' + that.model.id + ' .modal-body').html(commentIndexView.render().$el);
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
    
    if (that.$el.find('.tags').length < 1){
      $.ajax ({
        url: "/posts/" + this.model.get('id') + "/tags",
        type: 'GET',
        success: function(data) {
          data.forEach( function(tag) {
            if ($.inArray(tag.body, that.model.tags()) === -1) {
              that.model.tags().push(tag.body);
            }
          });

          that.$el.find('.panel-footer').append("<div class='tagsField' style='display:none;'><div class='tags'></div></div>")
       
          that.model.tags().forEach(function(tag) {
            that.$el.find('.tags').append("<br><a href='#/tags/" + tag + "'>" + tag +"</a>"); 
          });

          that.$el.find('.tagsField').append(
            "<br><form><input type='text' class='newTag'><button type='submit' class='addTag btn btn-default btn-sm'>Add Tag</button></form>"
          );

          that.$el.find('.tagsField').slideToggle('default', function() {
            that.$el.find('.tagBtn').removeClass('disabled');
          });
        }
      });
    } else {
      that.$el.find('.tagsField').slideToggle('default', function() {
        that.$el.find('.tagsField').remove();
        that.$el.find('.tagBtn').removeClass('disabled');
      });
    }
    this.$el.find('.tagBtn').addClass('disabled');
  },

  addTag: function() {
    var that = this;
    var newTag = $('.newTag').val();
    this.$el.find('.newTag').val('');

    $.ajax ({
      url: "/posts/" + this.model.get('id') + "/tags",
      type: 'POST',
      data: {
        body: newTag
      },
      success: function() {
        that.model.tags().push(newTag);
        that.$el.find('.tags').append("<br><a href='#/tags/" + newTag + "'>" + newTag +"</a>");
      }
    });
  },

  deletePost: function() {
    this.model.destroy();
    this.$el.find('.panel').remove();
  }
});