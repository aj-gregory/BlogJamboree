module BlogsHelper
	def dissalow_destroy_others_blog!
		@blog = Blog.find(params[:id])
		if current_user.id != @blog.user_id
			render :status => 401
		end
	end
end
