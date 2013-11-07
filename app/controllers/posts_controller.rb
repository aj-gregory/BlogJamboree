class PostsController < ApplicationController

  def update
    @post = Post.find(params[:id])

		@comment_params = params[:post].delete(:comments) || []
		@comment_params.each { |comment| comment['author_id'] = current_user.id if !comment[:created_at] }
    @comment_params.each { |comment| @post.comments.build(comment) if !comment[:created_at] }
    p "PARAMS"
		p @comment_params
    @post.update_attributes!(params[:post])
    render :json => @post, :include => :comments
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    head :ok
  end

end
