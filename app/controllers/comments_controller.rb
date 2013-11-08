class CommentsController < ApplicationController
	before_filter :authenticate_user!

	def create
	  @comment = Comment.new(params[:comment])
	  @comment.author_id = current_user.id
	  @comment.save!

	  render :json => @comment
	end

  def index
    @comments = Comment.where(:post_id => params[:post_id])
    render :json => @comments
  end

	def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    head :ok
	end

end
