class PostsController < ApplicationController

  def create
    params[:post][:comments] = []
    @post = Post.new(params[:post])
		@post.author_id = current_user.id
		@post.save!

    render :json => @post
  end

  def index
		if user_signed_in?
	    @posts = Post.includes(:comments).where(:author_id => current_user.id)
	    render :json => @posts, :include => :comments
		else
			head :ok
		end
  end

  def update
    @comment_params = params[:post].delete(:comments) || []
    @post = Post.find(params[:id])
    @comment_params.each { |comment| @post.comments.build(comment) if !comment[:created_at] }

    @post.update_attributes!(params[:post])
    render :json => @post, :include => :comments
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    head :ok
  end

end
