JournalApp.Models.Post = Backbone.Model.extend({
  urlRoot:"/posts",

	comments: function() {
		if (!this.postComments) {
			this.postComments = new JournalApp.Collections.PostComments([], { post: this });
		}

		return this.postComments
	},

	parse: function(attributes, options){
		this.comments().reset(attributes.comments);
		delete attributes.comments;

		return attributes;
	},

	toJSON: function() {
		var json = _.extend({}, this.attributes);
		json.comments = this.comments().toJSON();

		return json;
	}
});
