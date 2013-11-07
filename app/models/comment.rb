class Comment < ActiveRecord::Base
  attr_accessible :body, :post_id, :author_id
  validates :body, :post_id, :author_id, :presence => true

  belongs_to :post
	belongs_to :author, :class_name => "User"
end
