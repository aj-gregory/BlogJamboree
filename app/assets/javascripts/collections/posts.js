JournalApp.Collections.BlogPosts = Backbone.Collection.extend({
  model: JournalApp.Models.Post,

	initialize: function(models, options){
    this.blog = options.blog;
  },

  url: function() {
    return "/blogs/" + this.blog.id + "/posts";
  }
});
