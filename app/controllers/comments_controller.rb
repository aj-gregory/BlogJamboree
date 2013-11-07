class CommentsController < ApplicationController

  def create
    @comment = Comment.new(params[:comment])
		@comment.post_id = params[:post_id]
		@comment.author_id = current_user.id

    @comment.save!
    render :json => @comment
  end

  def index
    @comments = Comment.where(:post_id => params[:post_id])
    render :json => @comments
  end

end
