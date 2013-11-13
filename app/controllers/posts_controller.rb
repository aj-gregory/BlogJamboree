class PostsController < ApplicationController
  before_filter :authenticate_user!

  def index
    @posts = Post.includes(:tags).all
    render :json => @posts, :include => :tags
  end

  def create
    @post = Post.new
    @post.title = params[:title]
    @post.body = params[:body]
    @post.blog_id = params[:blog_id]
    @post.photo_url = params[:photo_url]
    @post.author_id = current_user.id

    @post.save!
    render :json => @post
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
