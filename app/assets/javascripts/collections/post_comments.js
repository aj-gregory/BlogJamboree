JournalApp.Collections.PostComments = Backbone.Collection.extend({
	initialize: function(models, options){
    this.post = options.post;
  },

  model: JournalApp.Models.Comment,

  url: function() {
    return "/posts/" + this.post.id + "/comments";
  }
});