class BlogsController < ApplicationController
	include BlogsHelper

	before_filter :authenticate_user!
	before_filter :dissalow_alter_others_blog!, :only => [:destroy, :update]

	def index
		if user_signed_in?

	    @blogs = Blog
			  .includes(:followers)
			  .includes(:posts)
				.where(:user_id => current_user.id)

			@blogs.concat(current_user.followed_blogs)

	    render :json => @blogs, :include => [:followers, :posts]
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
