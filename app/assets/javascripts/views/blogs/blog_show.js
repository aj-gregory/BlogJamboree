JournalApp.Views.BlogShow = Backbone.View.extend({

  template: JST['blogs/show'],

  events: {
    'dblclick .name':'editName',
    'dblclick .description':'editDescription',
    'blur .nameEditBox':'updateName',
    'blur .descriptionEditBox':'updateDescription',
    'click .addPostBtn':'addPost',
    'click .followBtn':'followBlog',
    'click .unfollowBtn':'unfollowBlog',
    'click .delete':'deleteBlog',
    'click .postText':'postText',
    'hidden.bs.modal':'render'
  },

  render: function() {
    var that = this;

    var renderedContent = this.template({
      blog: this.model,
      blogPosts: this.model.blogPosts
    });

    this.$el.html(renderedContent);

    this.model.blogPosts.each(function(post) {
      that.$el.children('.posts').append(that.renderPost(post));
    });
    return this;
  },

  renderPost: function(post) {
    postView = new JournalApp.Views.PostShow({ model: post });
    return postView.render().$el;
  },

  editName: function() {
    var boxTemp = JST['blogs/nameEditBox'];
    box = boxTemp({
      attr: this.model.get('name')
    });

    $('.name').html(box);
  },

  editDescription: function() {
    var boxTemp = JST['blogs/descriptionEditBox'];
    box = boxTemp({
      attr: this.model.get('description')
    });

    $('.description').html(box);
  },

  updateName: function(event) {
    var newName = $(event.currentTarget).val();
    this.model.set({
      "name":newName
    });

    this.model.save();
    $('.name').html(newName);
  },

  updateDescription: function(event) {
    var newDescription = $(event.currentTarget).val();
    this.model.set({
      "description":newDescription
    });

    this.model.save();
    $('.description').html(newDescription);
  },

  followBlog: function() {
    var that = this;
    var current_user = JSON.parse($('#current_user_json').html());

    $.ajax ({
      url: "/blogs/" + this.model.get('id') + "/follows",
      type: 'POST',
      success: function(data) {
        that.model.followers().push(current_user.id);
        $('.followBtn').addClass('unfollowBtn');
        $('.unfollowBtn').removeClass('followBtn');
        $('.unfollowBtn').html('Unfollow');
      }
    });
    $('.followBtn').html('Following...')
  },

  unfollowBlog: function() {
    var that = this;
    var current_user = JSON.parse($('#current_user_json').html());

    $.ajax ({
      url: '/follows/1',
      type: 'DELETE',
      data: {
        blog_id: this.model.get('id')
      },
      success: function() {

        for(var i = 0; i < that.model.followers().length; i++){
          if (that.model.followers()[i] === current_user.id){
            that.model.followers().splice(i, 1);
          }
        };

        $('.unfollowBtn').addClass('followBtn');
        $('.unfollowBtn').removeClass('unfollowBtn');
        $('.followBtn').html('Follow');
      }
    });
  },

  deleteBlog: function() {
    this.model.destroy();
    $('.content').empty();
    Backbone.history.navigate("/", { trigger: true })
  },

  addPost: function() {
    var that = this;

    var newPost = new JournalApp.Models.Post();
    var postTitle = $('#newPostTitle').val();
    var postBody = $('#newPostBody').val();

    newPost.set({
      "title": postTitle,
      "body": postBody
    });

     this.model.blogPosts.add(newPost);
    this.model.save();
  },

  postText: function() {
    var postFormTemp = JST['blogs/text_post'];

    $('#post-text-modal .modal-body').html(postFormTemp());
  }
});