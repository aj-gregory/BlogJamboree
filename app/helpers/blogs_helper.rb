module BlogsHelper
	def dissalow_alter_others_blog!
		@blog = Blog.find(params[:id])
		if current_user.id != @blog.user_id
			head :status => 401
		end
	end
end
