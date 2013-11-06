class Blog < ActiveRecord::Base
  attr_accessible :description, :name, :user_id, :posts
  validates :name, :user_id, :presence => true

  belongs_to :user
  has_many :posts, :dependent => :destroy
	has_many :comments, :through => :posts
end
