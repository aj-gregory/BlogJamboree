class Comment < ActiveRecord::Base
  attr_accessible :body, :post_id
  validates :body, :post_id, :presence => true

  belongs_to :post
end
