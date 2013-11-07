class CommentsController < ApplicationController

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
