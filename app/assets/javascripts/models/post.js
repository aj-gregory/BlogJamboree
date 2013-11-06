JournalApp.Models.Post = Backbone.Model.extend({
  urlRoot:"/posts",

	toJSON: function() {
		// if (!this.postComments) {
//       this.postComments = new JournalApp.Collections.PostComments([], {post: this});
//     }

		var json = _.extend({}, this.attributes);
		json.comments = this.postComments.toJSON();
		return json;
	}
});
