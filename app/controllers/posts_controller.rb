class PostsController < ApplicationController
  before_filter :authenticate_user!

  def index
    @posts = Post.includes(:tags).all
    render :json => @posts, :include => :tags
  end

  def update
    @post = Post.find(params[:id])

    @comment_params = params[:post].delete(:comments) || []
    @comment_params.each { |comment| comment['author_id'] = current_user.id if !comment[:created_at] }
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
