class Follow < ActiveRecord::Base
  attr_accessible :blog_id, :follower_id

	validates :blog_id, :follower_id, :presence => true

	belongs_to :follower, :class_name => "User"
	belongs_to :blog
end
