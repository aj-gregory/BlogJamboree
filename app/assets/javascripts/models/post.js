JournalApp.Models.Post = Backbone.Model.extend({
  urlRoot: function() {
    return "/blogs/" + this.get('blog_id') + "/posts" 
  },

  tags: function() {
    if (!this.postTags){
      this.postTags = [];
    }

    return this.postTags;
  },

  parse: function(attributes, options){
    var that = this;

    if (attributes.tags){
      attributes.tags.forEach(function(tag) {
        that.tags().push(tag.body);
      });
    }

    return attributes;
  },

  toJSON: function() {
    if (!this.postComments) {
      this.postComments = new JournalApp.Collections.PostComments([], {post: this});
    }

    var json = _.extend({}, this.attributes);
    json.comments = this.postComments.toJSON();
    return json;
  }
});
