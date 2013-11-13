JournalApp.Views.BlogForm = Backbone.View.extend({
  template: JST['blogs/edit'],

  events: {
    "submit form":"submit"
  },

  render: function() {
    renderedContent = this.template({
      blog: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var that = this;

    var formData = $(event.currentTarget).serializeJSON();

    this.model.set({
      'name':formData.blog.name,
      'description':formData.blog.description
    });

    if (!this.model.isNew()){
      this.model.save({}, {
        success: function() {
          Backbone.history.navigate("/", { trigger: true });
        }
      });
    } else {
      this.collection.create(this.model, {
        success: function(newBlog) {
          Backbone.history.navigate("/blogs/" + newBlog.get('id'), { trigger: true });
        },

        error: function() {
          that.collection.remove(this.model);
        }
      });
    }
  }
});