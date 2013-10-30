class PostsController < ApplicationController

  def create
    @post = Post.create!(params[:post])
    render :json => @post
  end

  def index
    @posts = Post.all
    render :json => @posts
  end

end
