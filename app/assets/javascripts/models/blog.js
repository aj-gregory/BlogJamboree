JournalApp.Models.Blog = Backbone.Model.extend({
  urlRoot:"/blogs",

	parse: function(attributes, options){
		if (!this.blogPosts) {
			this.blogPosts = new JournalApp.Collections.BlogPosts([], {blog: this});
		}
		this.blogPosts.reset(attributes.posts);
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