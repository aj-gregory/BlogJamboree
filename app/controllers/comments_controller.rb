class CommentsController < ApplicationController

  def create
    @comment = Comment.new(body: params[:comment][:body])
    @comment.save!
    render :json => @comment
  end

  def index
    @comments = Comment.where(:post_id => params[:post_id])
		p "COMMENTS"
		p @comments
    render :json => @comments
  end

end
