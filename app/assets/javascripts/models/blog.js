JournalApp.Models.Blog = Backbone.Model.extend({
  urlRoot:"/blogs",

  followers: function() {
    if (!this.followingUsers){
      this.followingUsers = [];
    }

    return this.followingUsers;
  },

	parse: function(attributes, options){
		var that = this;

    if (!this.blogPosts) {
			this.blogPosts = new JournalApp.Collections.BlogPosts([], {blog: this});
		}
		this.blogPosts.reset(attributes.posts);

    if (attributes.followers){
      attributes.followers.forEach(function(follower) {
        that.followers().push(follower.id);
      });
    }

		delete attributes.posts;

		return attributes;
	},

	toJSON: function() {
		if (!this.blogPosts) {
			this.blogPosts = new JournalApp.Collections.BlogPosts([], {blog: this});
		}

		var json = _.extend({}, this.attributes);
		json.posts = this.blogPosts.toJSON();
		return json;
	}
});