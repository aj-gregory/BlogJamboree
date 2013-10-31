class PostsController < ApplicationController

  def create
    @comment_params = params[:post].delete(:comments) || []
    p "!!!!!!!!!!!!"
    @post = Post.create!(params[:post])
    @comment_params.each { |comment| @post.comments.build(comment) }

    render :json => @post
  end

  def index
    @posts = Post.all
    render :json => @posts
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes!(params[:post])
    render :json => @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    head :ok
  end

end
