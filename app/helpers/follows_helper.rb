module FollowsHelper
	def dissalow_following_own_blog!
		@blog = Blog.find(params[:blog_id])
		if @blog.user_id == current_user.id
			head :status => 401
		end
	end
end
