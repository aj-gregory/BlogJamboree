JournalApp.Views.SearchShow = Backbone.View.extend({
  template: JST['search/show'],

  render: function() {
    var that = this;
    var renderedContent = this.template();

    this.$el.html(renderedContent);

    this.collection.each(function(post) {
      that.$el.children('.posts').append(that.renderPost(post));
    });

    return this;
  },

  renderPost: function(post) {
    postView = new JournalApp.Views.PostShow({ model: post });
    return postView.render().$el;
  }
});