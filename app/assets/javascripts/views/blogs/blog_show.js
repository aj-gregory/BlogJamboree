JournalApp.Views.BlogShow = Backbone.View.extend({

  template: JST['blogs/show'],

  events: {
    'dblclick .name':'editName',
    'dblclick .description':'editDescription',
    'blur .nameEditBox':'updateName',
    'blur .descriptionEditBox':'updateDescription',
    'click .followBtn':'followBlog',
    'click .unfollowBtn':'unfollowBlog',
    'click .delete':'deleteBlog',
    'click .addPostBtn':'addPostText',
    'click .postText':'postText',
    'click .postPhoto':'choosePhoto',
    'click .addPhotoBtn':'postPhoto',
    'hidden.bs.modal #post-text-modal':'render',
    'hidden.bs.modal #post-photo-modal':'render'
  },

  render: function() {
    var that = this;
    $('.panel').empty();

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
        $('.unfollowBtn').removeClass('followBtn disabled');
        $('.unfollowBtn').html('Unfollow');
        $('.followed').append('<a class="list-group-item" href="#/blogs/' 
          + that.model.get('id') +'">' + that.model.escape('name') + '</a>');
      }
    });
    $('.followBtn').addClass('disabled');
    $.gritter.add({
      title: "Blog followed",
      text: this.model.get('name'),
      image: 'assets/checkmark.png'
    });
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
        $('.unfollowBtn').removeClass('unfollowBtn disabled');
        $('.followBtn').html('Follow');
        $('.list-group-item[href="#/blogs/'+ that.model.get('id') + '"]').remove();
      }
    });
    $('.unfollowBtn').addClass('disabled');
  },

  deleteBlog: function() {
    $('.panel').remove();
    $('.content hr').remove();
    this.model.destroy();
    this.$el.find('#confirm-delete-modal').modal('hide');
    Backbone.history.navigate("/", { trigger: true });
  },

  addPostText: function() {
    var that = this;
    var newPost = new JournalApp.Models.Post()
    var postTitle = $('#newPostTitle').val();
    var postBody = $('#newPostBody').val();

    newPost.set({
      "title": postTitle,
       "body": postBody,
       "blog_id": this.model.get('id')
    })

     this.model.blogPosts.create(newPost, {
       success: function() {
         that.$el.find('#post-text-modal').modal('hide');
       },
       error: function() {
         that.$el.find('#post-text-modal .errors').fadeIn();
         that.model.blogPosts.remove(newPost);
       }
     });
  },

  postText: function() {
    var postFormTemp = JST['blogs/text_post'];

    $('#post-text-modal .modal-body').append(postFormTemp());
  },

  choosePhoto: function() {
   var that = this;
   filepicker.setKey('AynRnvKa9T6WSrxRv1ExZz');

   $('.dropPane').html("Drag a photo here!")

    filepicker.makeDropPane($('.dropPane'), {
      dragEnter: function() {
        $(".dropPane").html("Drop to upload").css({
            'backgroundColor': "#E0E0E0",
        });
      },
      dragLeave: function() {
        $(".dropPane").html("Drag a photo here!").css({
            'backgroundColor': "#F6F6F6",
            'border': "1px dashed #666"
        });
      },
      onSuccess: function(data) {
        that.photoUrl = data[0].url;
        $(".dropPane").css({
          'background': 'url(' + that.photoUrl +') no-repeat center'
        });
        $(".dropResult").text(data[0].filename); 
      },
      onError: function(type, message) {
        $(".dropResult").text('('+type+') '+ message);
      },
      onProgress: function(percentage) {
        $(".dropPane").text("Uploading ("+percentage+"%)");
      }
    });
  },

  postPhoto: function() {
    var that = this;
    var newPost = new JournalApp.Models.Post();

    newPost.set({
      'photo_url': this.photoUrl,
      'blog_id': this.model.get('id')
    });

    this.model.blogPosts.create(newPost, {
      success: function() {
        that.$el.find('#post-photo-modal').modal('hide');
      },
      error: function() {
        that.$el.find('#post-photo-modal .errors').fadeIn();
        that.model.blogPosts.remove(newPost);
      }
    });
  }


});