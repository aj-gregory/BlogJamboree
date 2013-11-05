class PostsController < ApplicationController

  def create
    params[:post][:comments] = [];
    @post = Post.create!(params[:post])

    render :json => @post
  end

  def index
    @posts = Post.includes(:comments).all
    render :json => @posts, :include => :comments
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
