JournalApp.Collections.Blogs = Backbone.Collection.extend({
  model: JournalApp.Models.Blog,
  url: "/blogs",
});