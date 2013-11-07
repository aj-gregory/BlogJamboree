class Follow < ActiveRecord::Base
  attr_accessible :blog_id, :follower_id
	validates :blog_id, :follower_id, :presence => true

  belongs_to :blog
	belongs_to :follower,
	  :class_name => "User";
end
