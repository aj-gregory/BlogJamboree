class FollowsController < ApplicationController
	include FollowsHelper

	before_filter :authenticate_user!
  before_filter :dissalow_following_own_blog!

	def create
		@follow = Follow.new
		@follow.blog_id = (params[:blog_id])
		@follow.follower_id = current_user.id
		@follow.save!

		render :json => @follow
	end

	def destroy
		@follow = Follow.find_by_blog_id_and_follower_id(params[:blog_id], current_user.id)
		@follow.destroy
		head :ok
	end

end
