class BlogsController < ApplicationController

	def index
		if user_signed_in?

	    @blogs = Blog
			  .includes(:posts)
				.where(:user_id => current_user.id)

	    render :json => @blogs, :include => :posts
		else
			head :ok
		end
	end

	def create
		params[:blog][:posts] = []
    @blog = Blog.new(params[:blog])
		@blog.user_id = current_user.id
		@blog.save!

    render :json => @blog
	end

	def update

    @blog = Blog
		  .includes(:posts)
		  .find(params[:id])

    @post_params = params[:blog].delete(:posts) || []
    @post_params.each { |post| post['comments'] = [] if !post[:created_at] }
		@post_params.each { |post| post['author_id'] = current_user.id if !post[:created_at] }
    @post_params.each { |post| @blog.posts.build(post) if !post[:created_at] }

    @blog.update_attributes!(params[:blog])
    render :json => @blog, :include => :posts
	end

	def destroy
		@blog = Blog.find(params[:id])
    @blog.destroy
    head :ok
	end

end
