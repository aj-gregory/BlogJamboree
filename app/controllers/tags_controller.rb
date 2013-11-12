class TagsController < ApplicationController
  before_filter :authenticate_user!

  def index
    @post = Post.find(params[:post_id])
    @tags = @post.tags
    render :json => @tags
  end

  def create
    @tag = Tag.new
    @tag.post_id = params[:post_id]
    @tag.body = params[:body]
    @tag.save!

    render :json => @tag
  end
end
