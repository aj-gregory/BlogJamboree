class PostsController < ApplicationController

  def create
    params[:post][:comments] = []
    @post = Post.new(params[:post])
		@post.author_id = current_user.id
		@post.save!

    render :json => @post
  end

  def update
    @post = Post.find(params[:id])

		@comment_params = params[:post].delete(:comments) || []
		@comment_params.each { |comment| comment.author_id = current_user.id if !comment[:created_at] }
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
