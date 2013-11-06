JournalApp.Models.Post = Backbone.Model.extend({
  urlRoot:"/posts",

	parse: function(attributes, options){
		if (!this.postComments) {
			this.postComments = new JournalApp.Collections.PostComments([], {post: this});
		}
		this.postComments.reset(attributes.comments);
		delete attributes.comments;

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
