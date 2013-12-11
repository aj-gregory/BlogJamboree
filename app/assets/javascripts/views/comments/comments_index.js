JournalApp.Views.CommentsIndex = Backbone.View.extend({
  template: JST['comments/index'],

  events: {
    "click .deleteComment":"deleteComment"
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
    var comment = this.collection.get(commentID);
    $("p[data-id =" + commentID + "]").remove()
    comment.destroy();
  }
});