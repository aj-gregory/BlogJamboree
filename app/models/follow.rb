class Follow < ActiveRecord::Base
  attr_accessible :blog_id, :follower_id
	validates :blog_id, :follower_id, :presence => true

  belongs_to :blog,
  	:inverse_of => :follows

	belongs_to :follower,
	  :class_name => "User",
		:inverse_of => :follows
end
